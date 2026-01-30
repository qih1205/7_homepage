# AI Chat 配置指南

## 📁 文件结构

```
homepage_ws/
├── components/
│   └── AIChat.tsx           # AI聊天组件（前端）
├── app/
│   └── api/
│       └── chat/
│           └── route.ts     # AI API路由（后端）
├── lib/
│   └── knowledge-base.ts    # 个人资料知识库
└── .env.local              # 环境变量配置（需创建）
```

## 🎯 核心功能

### 1. 知识库管理
**文件**: `lib/knowledge-base.ts`

这个文件包含你的所有个人资料。你可以直接编辑这个文件来更新 AI 的知识：

```typescript
export const knowledgeBase = `
# HuangQi - Personal Information

## 基本信息
- 姓名: HuangQi (齐)
- 邮箱: qih1205@gmail.com
...
`;
```

**如何更新资料：**
1. 打开 `lib/knowledge-base.ts`
2. 使用 Markdown 格式编辑 `knowledgeBase` 变量
3. 保存文件即可，无需重新编译

### 2. API 路由
**文件**: `app/api/chat/route.ts`

处理 AI 请求的服务端代码。主要功能：
- 接收用户消息
- 从知识库检索相关信息
- 调用 AI API 生成回复
- 错误处理和备用响应

### 3. AI Chat 组件
**文件**: `components/AIChat.tsx`

前端聊天界面，已经配置为调用 `/api/chat` API。

## ⚙️ 配置步骤

### 步骤 1: 创建环境变量文件

```bash
# 在项目根目录创建 .env.local 文件
cp .env.local.example .env.local
```

### 步骤 2: 配置 API Key

编辑 `.env.local` 文件：

```bash
# OpenAI API（推荐）
OPENAI_API_KEY=sk-your-key-here

# 或使用其他兼容 OpenAI 的服务
# 例如 DeepSeek（国内可用）
# OPENAI_API_KEY=your-deepseek-key
# 并在 app/api/chat/route.ts 中修改 baseURL
```

**获取 API Key：**
- **OpenAI**: https://platform.openai.com/api-keys
- **DeepSeek**: https://platform.deepseek.com/
- **其他兼容服务**: 查看相应文档

### 步骤 3: 自定义知识库

编辑 `lib/knowledge-base.ts`：

```typescript
export const knowledgeBase = `
# 你的标题

## 分类1
- 信息1
- 信息2

## 分类2
- 详细描述...
`;
```

**提示：**
- 使用 Markdown 格式
- 按主题分类（教育、研究、技能等）
- 保持信息准确和最新

### 步骤 4: （可选）修改 AI 配置

编辑 `app/api/chat/route.ts` 中的配置：

```typescript
const AI_CONFIG = {
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: 'https://api.openai.com/v1',  // 可修改为其他服务
  model: 'gpt-3.5-turbo',  // 或 'gpt-4'
};
```

## 🔧 高级配置

### 使用其他 AI 服务

#### DeepSeek（国内推荐）
```typescript
const AI_CONFIG = {
  apiKey: process.env.OPENAI_API_KEY || '',
  baseURL: 'https://api.deepseek.com',
  model: 'deepseek-chat',
};
```

#### Azure OpenAI
```typescript
const AI_CONFIG = {
  apiKey: process.env.AZURE_OPENAI_API_KEY || '',
  baseURL: 'https://your-resource.openai.azure.com/openai/deployments/your-deployment',
  model: 'gpt-35-turbo',
};
```

#### Claude（通过 Anthropic API）
需要修改 API 调用格式，参考 Anthropic 文档。

### 自定义系统提示词

在 `app/api/chat/route.ts` 中修改 `SYSTEM_PROMPT`：

```typescript
const SYSTEM_PROMPT = `你是一个友好的AI助手...
添加你的自定义指令...`;
```

## 🚀 运行和测试

1. **启动开发服务器**
```bash
npm run dev
```

2. **测试聊天**
   - 访问 http://localhost:3000
   - 点击 "Chat with AI" 按钮
   - 发送测试消息

3. **查看日志**
   - API 错误会显示在终端
   - 浏览器控制台显示前端错误

## 📊 无 API Key 模式

如果没有配置 API Key，系统会自动使用备用模式：
- 基于关键词匹配
- 从知识库中提取信息
- 提供预设回复

## 🔒 安全提示

1. **不要提交 .env.local**
   - 已在 .gitignore 中
   - API Key 不会泄露

2. **保护 API Key**
   - 不要在客户端代码中使用
   - 使用环境变量
   - 定期轮换密钥

3. **限制使用**
   - 设置使用限额
   - 监控 API 调用
   - 考虑添加速率限制

## 📝 示例问题

测试 AI 可以回答的问题：
- "HuangQi 的邮箱是什么？"
- "他在哪里读书？"
- "他的研究兴趣是什么？"
- "他参与过哪些竞赛？"
- "他的技能有哪些？"

## 🐛 故障排除

### 问题 1: API 调用失败
**解决**:
- 检查 API Key 是否正确
- 确认 API 服务可用
- 查看终端错误日志

### 问题 2: AI 回复不准确
**解决**:
- 更新知识库内容
- 修改系统提示词
- 调整 temperature 参数

### 问题 3: 响应速度慢
**解决**:
- 使用更快的模型（如 gpt-3.5-turbo）
- 减少 max_tokens
- 使用国内 API 服务

## 💡 优化建议

1. **添加缓存**
   - 缓存常见问题
   - 减少重复 API 调用

2. **实现流式响应**
   - 实时显示 AI 回复
   - 提升用户体验

3. **添加用户反馈**
   - 点赞/点踩
   - 改进回答质量

4. **集成向量数据库**
   - 如 Pinecone, Weaviate
   - 更智能的上下文检索

## 📚 相关资源

- [OpenAI API 文档](https://platform.openai.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [RAG 技术指南](https://python.langchain.com/docs/use_cases/question_answering)
