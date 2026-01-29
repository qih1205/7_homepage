'use client';

import { useState } from 'react';
import { Button, Card, CardHeader, CardContent, CardTitle, Input, WaveBackground } from '@/components';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
  formatDate,
  debounce,
  throttle,
  randomString,
  formatFileSize,
  isValidEmail,
  truncateText,
} from '@/utils';

export default function DemoPage() {
  const [count, setCount] = useLocalStorage('demo-count', 0);
  const [name, setName] = useLocalStorage('demo-name', '');
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');

  // 演示工具函数
  const handleGenerateRandom = () => {
    alert(`随机字符串: ${randomString(12)}`);
  };

  const handleShowDate = () => {
    alert(`当前时间: ${formatDate(new Date())}`);
  };

  const handleShowFileSize = () => {
    const sizes = [0, 1024, 1048576, 1073741824, 1234567890];
    alert(`文件大小示例:\n${sizes.map((s) => `${s} bytes = ${formatFileSize(s)}`).join('\n')}`);
  };

  // 验证邮箱
  const validateEmail = (email: string) => {
    if (email && !isValidEmail(email)) {
      setEmailError('请输入有效的邮箱地址');
    } else {
      setEmailError('');
    }
  };

  const debouncedValidate = debounce(validateEmail, 300);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    debouncedValidate(e.target.value);
  };

  return (
    <main className="relative min-h-screen p-8">
      {/* Wave Background */}
      <WaveBackground />

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
            组件演示
          </h1>
          <p className="text-white/90 drop-shadow">
            Next.js 14 + TypeScript + Tailwind CSS
          </p>
          <a
            href="/"
            className="inline-block mt-4 text-white hover:text-pink-200 drop-shadow"
          >
            ← 返回首页
          </a>
        </div>

        {/* Button Components */}
        <Card>
          <CardHeader>
            <CardTitle>Button 组件</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Variants */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  变体样式
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  尺寸大小
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  状态
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button>默认状态</Button>
                  <Button disabled>禁用状态</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Input Components */}
        <Card>
          <CardHeader>
            <CardTitle>Input 组件</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-w-md">
              <Input
                label="用户名"
                placeholder="请输入用户名"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="邮箱地址"
                type="email"
                placeholder="example@email.com"
                value={emailValue}
                onChange={handleEmailChange}
                error={emailError}
              />
              <Input
                label="密码"
                type="password"
                placeholder="请输入密码"
              />
              <Input
                label="禁用状态"
                placeholder="此输入框已禁用"
                disabled
              />
            </div>
          </CardContent>
        </Card>

        {/* Card Components */}
        <Card>
          <CardHeader>
            <CardTitle>Card 组件</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">简单卡片</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    这是一个简单的卡片内容示例。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>带头部的卡片</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    这个卡片有独立的头部和内容区域。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>功能卡片</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    支持自定义内容
                  </p>
                  <Button size="sm">操作按钮</Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* useLocalStorage Hook */}
        <Card>
          <CardHeader>
            <CardTitle>useLocalStorage Hook</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-700 dark:text-gray-300">
                  计数器 (持久化到 localStorage):
                </span>
                <span className="text-2xl font-bold text-blue-600">{count}</span>
              </div>
              <div className="flex gap-3">
                <Button onClick={() => setCount(count + 1)}>增加</Button>
                <Button onClick={() => setCount(count - 1)} variant="secondary">
                  减少
                </Button>
                <Button onClick={() => setCount(0)} variant="outline">
                  重置
                </Button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                刷新页面后，计数器的值会被保留。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Utility Functions */}
        <Card>
          <CardHeader>
            <CardTitle>工具函数演示</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">日期格式化</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDate(new Date())}
                </p>
                <Button size="sm" onClick={handleShowDate}>
                  显示当前时间
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">随机字符串</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  生成指定长度的随机字符串
                </p>
                <Button size="sm" onClick={handleGenerateRandom}>
                  生成随机字符串
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">文件大小格式化</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  将字节数转换为可读格式
                </p>
                <Button size="sm" onClick={handleShowFileSize}>
                  查看示例
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">文本截断</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {truncateText('这是一段很长的文本，会被截断显示。', 15)}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">防抖 & 节流</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  优化高频事件处理
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">深拷贝</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  对象和数组的深度复制
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* All Utility Functions List */}
        <Card>
          <CardHeader>
            <CardTitle>可用工具函数列表</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  formatDate(date, format)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">格式化日期</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  debounce(func, wait)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">防抖函数</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  throttle(func, limit)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">节流函数</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  deepClone(obj)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">深拷贝对象</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  randomString(length)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">生成随机字符串</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  formatFileSize(bytes)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">格式化文件大小</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  isValidEmail(email)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">验证邮箱格式</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  truncateText(text, maxLength)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">截断文本</p>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <code className="text-blue-600 dark:text-blue-400">
                  delay(ms)
                </code>
                <p className="text-gray-600 dark:text-gray-400 mt-1">延迟执行</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
