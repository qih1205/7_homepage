import { NextRequest, NextResponse } from 'next/server';
import { getRelevantContext } from '@/lib/knowledge-base';
import { rateLimit, getClientIP } from '@/lib/rate-limit';

// AI 配置 - 使用 DeepSeek
const AI_CONFIG = {
  apiKey: process.env.DEEPSEEK_API_KEY || '',
  baseURL: 'https://api.deepseek.com',
  model: 'deepseek-chat',
};

// 系统提示词
const SYSTEM_PROMPT = `你是一个友好的AI助手，负责回答关于HuangQi的问题。请使用提供的上下文信息来准确回答用户的问题。

回答时请注意：
1. 保持友好和专业的语气
2. 只使用提供的上下文信息回答
3. 如果上下文中没有相关信息，诚实地告诉用户
4. 可以建议用户访问网站的特定页面获取更多信息
5. 回答要简洁明了，通常2-3句话即可
6. 使用中文回答`;

export async function POST(request: NextRequest) {
  // Rate Limiting 检查
  const ip = getClientIP(request);
  const rateLimitResult = rateLimit(ip, 5, 60000); // 每 60 秒最多 5 次请求

  if (!rateLimitResult.success) {
    const retryAfter = Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000);
    return NextResponse.json(
      {
        error: `请求过于频繁 请在 ${retryAfter} 秒后重试 // Too many requests. Please try again after ${retryAfter} seconds.`,
        retryAfter,
      },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          'Retry-After': retryAfter.toString(),
        },
      }
    );
  }

  try {
    const { messages } = await request.json();

    // 获取用户最新消息
    const userMessage = messages[messages.length - 1]?.content || '';

    // 获取相关上下文
    const context = getRelevantContext(userMessage);

    // 如果没有配置 API Key，返回模拟响应
    if (!AI_CONFIG.apiKey) {
      return NextResponse.json({
        role: 'assistant',
        content: getFallbackResponse(userMessage, context)
      });
    }

    // 调用 OpenAI API
    const response = await fetch(`${AI_CONFIG.baseURL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AI_CONFIG.apiKey}`,
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        messages: [
          {
            role: 'system',
            content: `${SYSTEM_PROMPT}\n\n# 上下文信息\n${context}`
          },
          ...messages.filter((m: { role: string }) => m.role !== 'system')
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`AI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const aiMessage = data.choices[0]?.message?.content || '抱歉，我无法生成回复。';

    return NextResponse.json({
      role: 'assistant',
      content: aiMessage
    });

  } catch (error) {
    console.error('Chat API error:', error);

    // 出错时返回基于知识库的简单响应
    const { messages } = await request.json();
    const userMessage = messages[messages.length - 1]?.content || '';
    const context = getRelevantContext(userMessage);

    return NextResponse.json({
      role: 'assistant',
      content: getFallbackResponse(userMessage, context)
    });
  }
}

// 备用响应函数（当没有 API 或出错时使用）
function getFallbackResponse(query: string, context: string): string {
  const queryLower = query.toLowerCase();

  // 简单的关键词匹配
  if (queryLower.includes('联系方式') || queryLower.includes('邮箱') || queryLower.includes('email')) {
    return '你可以通过邮箱联系HuangQi：qih1205@gmail.com';
  }

  if (queryLower.includes('学校') || queryLower.includes('教育') || queryLower.includes('大学')) {
    return 'HuangQi就读于澳门大学计算机科学专业，预计2026年毕业。';
  }

  if (queryLower.includes('研究') || queryLower.includes('兴趣') || queryLower.includes('research')) {
    return 'HuangQi的研究兴趣包括机器人学、强化学习、视觉语言导航和人工智能。';
  }

  if (queryLower.includes('项目') || queryLower.includes('作品')) {
    return 'HuangQi参与了自主机器人导航和视觉语言智能体等项目，详情可以查看Research页面。';
  }

  if (queryLower.includes('技能') || queryLower.includes('技术')) {
    return 'HuangQi精通Python、C++、TypeScript，熟悉PyTorch、TensorFlow、React、Next.js等技术栈。';
  }

  // 默认响应
  return '我是HuangQi的AI助手，可以帮助你了解关于他的信息。你可以询问关于教育背景、研究兴趣、工作经历或联系方式等问题。';
}
