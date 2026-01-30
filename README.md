# HuangQi - Personal Homepage

Shaping the robots that are shaping the future.

## 技术栈

- **Next.js 14** - React 框架（App Router）
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Three.js** - 3D 图形库
- **React Three Fiber** - Three.js 的 React 渲染器
- **DeepSeek API** - AI 聊天功能

## 项目结构

```
homepage/
├── app/                           # App Router 页面
│   ├── page.tsx                   # 首页
│   ├── personal-info/             # 个人信息页面
│   ├── research/                  # 研究兴趣页面
│   ├── events/                    # 活动页面
│   ├── layout.tsx                 # 根布局
│   └── globals.css                # 全局样式
├── components/                    # React 组件
│   ├── WaveSurface3D.tsx          # 3D 波浪曲面背景
│   ├── AIChat.tsx                 # AI 聊天组件
│   └── index.ts                   # 组件导出
├── lib/                           # 工具库
│   └── api.ts                     # DeepSeek API 客户端
└── public/                        # 静态资源
    └── images/                    # 图片资源
```

## 功能特性

### 页面

- **首页** - 个人介绍与导航
  - 3D 波浪曲面背景
  - 三个主要功能卡片
  - 邮箱联系功能（支持 Gmail、Outlook、QQ Mail、163 Mail）
  - AI Chat 智能助手

- **Personal INFO** - 教育背景与经历
  - 教育信息
  - 工作与研究经历
  - 基本信息

- **Research Interests** - 研究兴趣
  - Robotics（机器人）
  - Reinforcement Learning（强化学习）
  - Vision-Language Navigation（视觉语言导航）
  - Artificial Intelligence（人工智能）
  - 精选项目展示

- **Events** - 活动与成就
  - 竞赛经历（RoboMaster、AI Challenge）
  - 活动参与
  - 开源贡献
  - 奖项与荣誉

### 3D 波浪曲面背景

使用 Three.js 和自定义 Shader 实现的动态波浪效果：
- 顶点着色器动态生成波浪
- 流畅的 GPU 加速渲染
- 自适应屏幕尺寸

### AI Chat

集成 DeepSeek API 的智能聊天助手：
- 速率限制保护（每分钟最多请求次数）
- 消息历史管理
- 实时流式响应
- 错误处理与重试机制

## 快速开始

### 安装依赖

```bash
npm install
```

### 配置环境变量

创建 `.env.local` 文件并添加 DeepSeek API 密钥：

```env
DEEPSEEK_API_KEY=your_api_key_here
DEEPSEEK_API_BASE=https://api.deepseek.com
DEEPSEEK_RATE_LIMIT=10
```

### 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
npm run start
```

### 代码检查

```bash
npm run lint
```

## 页面路由

- `/` - 首页
- `/personal-info` - 个人信息
- `/research` - 研究兴趣
- `/events` - 活动与成就

## 联系方式

- **Email**: qih1205@gmail.com | qih0012@qq.com
- **Location**: University of Macau, Taipa, Macau, China

## 部署

项目已配置 Vercel 部署，支持：

- 自动构建与部署
- 环境变量管理
- 边缘网络优化

直接推送到 main 分支即可触发自动部署。

## 许可证

MIT
