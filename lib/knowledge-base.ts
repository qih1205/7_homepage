// 个人资料知识库
export const knowledgeBase = `
# HuangQi - Personal Information

## 基本信息
- 姓名: HuangQi (黄琦)
- 邮箱: qih1205@gmail.com
- 学校: University of Macau (硕士)，西安交通大学（本科）
- 专业: Robotics (机器人学)
- 预计毕业: 2027

## 教育背景
- University of Macau
  - 硕士研究生，机器人学
  - 预计毕业时间: 2026年
  - 地址: Avenida da Universidade, Taipa, Macau, China

## 研究兴趣
- Robotics (机器人学)
  - Robot Manipulation (机器人操作)
  - Mobile Navigation (移动导航)
  - Human-Robot Interaction (人机交互)
- Reinforcement Learning (强化学习)
  - Deep RL Algorithms (深度强化学习算法)
  - Multi-Agent Systems (多智能体系统)
  - Policy Optimization (策略优化)
- Vision-Language Navigation (视觉语言导航)
  - Visual Reasoning (视觉推理)
  - Language Grounding (语言基础)
  - Cross-Modal Learning (跨模态学习)
- Artificial Intelligence (人工智能)
  - Deep Learning (深度学习)
  - Computer Vision (计算机视觉)
  - Natural Language Processing (自然语言处理)

## 工作经历
- Research Assistant
  - University of Macau Robotics Lab
  - 2024 - Present
  - 研究方向：机器人操作和导航算法

- Software Developer Intern
  - Tech Company
  - 2023 - 2024
  - 全栈开发：React, Next.js, Three.js

## 技能
- 编程语言: Python, C++, TypeScript, JavaScript
- 框架/库: PyTorch, TensorFlow, React, Next.js, Three.js
- 工具: ROS, Git, Docker, Linux

## 竞赛与活动
- RoboMaster Competition 2024
  - 成绩: Top 16
  - 地点: 深圳，中国

- AI Challenge - Robot Navigation 2023
  - 成绩: Finalist
  - 使用强化学习开发自主导航系统

- Robotics Research Lab Member
  - University of Macau
  - 2023 - Present

- Tech Club President
  - University of Macau Technology Club
  - 2023 - Present
  - 组织编程工作坊、黑客马拉松和技术讲座

## 成就
- Best Paper Award - Student Research Symposium 2024
- Dean's List - University of Macau 2022-2024
- Hackathon Winner - UM TechFest 2023
- Research Grant - UM Student Research Award 2024

## 联系方式
- Email: qih1205@gmail.com
- 位置: Macau, China
- 语言: Chinese, English

## 项目展示
- Autonomous Robot Navigation
  - 使用强化学习和视觉SLAM开发鲁棒导航系统
  - 技术: RL, ROS, SLAM

- Vision-Language Agent
  - 构建能够遵循自然语言指令的具身AI智能体
  - 技术: VLN, Transformers, PyTorch
`;

// 获取相关上下文
export function getRelevantContext(query: string): string {
  // 简单的关键词匹配（实际应用中可以使用向量搜索）
  const keywords = query.toLowerCase().split(/\s+/);
  const sections = knowledgeBase.split('\n##');

  let relevantSections: string[] = [];

  sections.forEach(section => {
    const sectionLower = section.toLowerCase();
    const matchCount = keywords.filter(keyword =>
      keyword.length > 2 && sectionLower.includes(keyword)
    ).length;

    if (matchCount > 0) {
      relevantSections.push(`##${section}`);
    }
  });

  // 如果没有匹配，返回提示信息
  if (relevantSections.length === 0) {
    // return '暂未检索到相关信息，你可以亲自问他';
    return knowledgeBase.split('\n##').slice(0, 4).join('\n##');
  }

  // 返回最相关的3个部分
  return relevantSections.slice(0, 3).join('\n\n');
}
