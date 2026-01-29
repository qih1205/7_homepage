# Next.js 14 模板 - Three.js 流体波浪动画

一个功能完整的 Next.js 14 前端模板，包含基础组件、工具函数和 Three.js + GLSL Shader 实现的流体波浪动画效果。

## 技术栈

- **Next.js 14** - React 框架（App Router）
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Three.js** - 3D 图形库
- **GLSL Shaders** - 自定义着色器

## 项目结构

```
homepage_ws/
├── app/                      # App Router 页面
│   ├── demo/                 # 组件演示页面
│   │   └── page.tsx
│   ├── wave/                 # 波浪动画展示页面
│   │   └── page.tsx
│   ├── globals.css           # 全局样式
│   ├── layout.tsx            # 根布局
│   └── page.tsx              # 首页
├── components/               # React 组件
│   ├── Button.tsx            # 按钮组件
│   ├── Card.tsx              # 卡片组件
│   ├── Input.tsx             # 输入框组件
│   ├── WaveBackground.tsx    # 波浪背景组件（Three.js + GLSL）
│   └── index.ts              # 组件导出
├── hooks/                    # 自定义 Hooks
│   └── useLocalStorage.ts    # localStorage Hook
├── utils/                    # 工具函数
│   └── index.ts              # 常用工具函数
└── package.json
```

## 功能特性

### 基础组件

- **Button** - 多种变体（primary、secondary、outline、ghost）和尺寸（sm、md、lg）
- **Card** - 卡片及其子组件（CardHeader、CardContent、CardTitle）
- **Input** - 带标签和错误提示的输入框组件

### 自定义 Hooks

- **useLocalStorage** - 带类型安全的 localStorage Hook，支持跨标签页同步

### 工具函数

- `formatDate()` - 日期格式化
- `debounce()` - 防抖函数
- `throttle()` - 节流函数
- `deepClone()` - 深拷贝对象
- `randomString()` - 生成随机字符串
- `formatFileSize()` - 格式化文件大小
- `isValidEmail()` - 验证邮箱格式
- `truncateText()` - 截断文本
- `delay()` - 延迟执行

### 流体波浪动画

使用 Three.js 和 GLSL Shader 实现的有机流体波浪效果：

- **Simplex Noise** - 生成有机波动模式
- **Fractal Brownian Motion (FBM)** - 创建多层波浪细节
- **颜色渐变** - 粉色到蓝色的平滑过渡
- **鼠标交互** - 波浪会响应鼠标位置产生微妙变化
- **GPU 加速** - 使用 WebGL 实现高性能渲染

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看首页。

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
- `/demo` - 组件演示页面（展示所有基础组件和工具函数）
- `/wave` - 流体波浪动画展示页面

## 波浪动画实现细节

### Shader 技术

**顶点着色器** (Vertex Shader):
- 传递 UV 坐标到片段着色器

**片段着色器** (Fragment Shader):
- 使用 Simplex Noise 生成有机噪声
- 通过 FBM 叠加多层噪声创建细节
- 根据噪声值混合粉蓝渐变
- 添加鼠标交互影响

### 颜色方案

```glsl
vec3 color1 = vec3(1.0, 0.4, 0.7);  // Pink
vec3 color2 = vec3(0.95, 0.5, 0.8); // Light pink
vec3 color3 = vec3(0.6, 0.8, 1.0);  // Light blue
vec3 color4 = vec3(0.4, 0.6, 0.95); // Blue
```

### 动画参数

- **uTime** - 控制动画时间
- **uResolution** - 屏幕分辨率
- **uMouse** - 鼠标位置（用于交互）

## 自定义波浪效果

你可以修改 `components/WaveBackground.tsx` 中的以下参数来自定义效果：

1. **颜色** - 修改 `color1` 到 `color4` 的 RGB 值
2. **速度** - 调整 `uTime` 的乘数
3. **噪声比例** - 修改 `st * 5.0` 中的数值
4. **FBM 迭代次数** - 修改循环次数（当前为 5）
5. **鼠标影响** - 调整 `mouseInfluence * 0.3` 中的数值

## 性能优化

- 使用 GPU 加速的 WebGL 渲染
- 自适应像素比率（最高 2x）
- 优化的着色器代码
- 组件卸载时自动清理资源

## 浏览器兼容性

支持所有现代浏览器：
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

需要 WebGL 支持。

## 许可证

MIT
