'use client';

import { useState } from 'react';
import { Button, Card, CardHeader, CardContent, CardTitle, Input, WaveBackground, ScrollSection } from '@/components';
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
    <main className="relative min-h-[400vh]">
      {/* Wave Background - 固定在背景 */}
      <div className="fixed inset-0">
        <WaveBackground />
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto space-y-40">
          {/* Header - 也会沉入水中 */}
          <ScrollSection delay={0}>
            <div className="text-center py-20">
              <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl mb-6">
                滚动查看动画效果
              </h1>
              <p className="text-2xl text-white/90 drop-shadow mb-8">
                向下滚动，体验所有内容沉入水中的效果 💧
              </p>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg rounded-lg hover:bg-white/30 transition-all drop-shadow-2xl border border-white/40 hover:scale-105 transform"
              >
                ← 返回首页
              </a>
            </div>
          </ScrollSection>

          {/* Section 1: Button Components - 沉入效果 */}
          <ScrollSection delay={0.15}>
            <Card className="backdrop-blur-xl bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">🚢 Button 组件</CardTitle>
                <p className="text-gray-600 mt-2">向下滚动时，此卡片会沉入背景</p>
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
          </ScrollSection>

          {/* Section 2: Input Components - 沉入效果 */}
          <ScrollSection delay={0.3}>
            <Card className="backdrop-blur-xl bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">💧 Input 组件</CardTitle>
                <p className="text-gray-600 mt-2">向下滚动时，此卡片也会沉入水中</p>
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
          </ScrollSection>

          {/* Section 3: Card Components - 沉入效果 */}
          <ScrollSection delay={0.45}>
            <Card className="backdrop-blur-xl bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">🌊 Card 组件</CardTitle>
                <p className="text-gray-600 mt-2">所有内容都会随着滚动沉入水底</p>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/50 dark:to-emerald-800/50">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">简单卡片</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          这是一个简单的卡片内容示例。
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/50">
                      <CardHeader>
                        <CardTitle className="text-lg">带头部的卡片</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          这个卡片有独立的头部和内容区域。
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/50 dark:to-cyan-800/50">
                      <CardHeader>
                        <CardTitle className="text-lg">功能卡片</CardTitle>
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
          </ScrollSection>

          {/* Section 4: useLocalStorage Hook - 沉入效果 */}
          <ScrollSection delay={0.6}>
            <Card className="backdrop-blur-xl bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">🔮 useLocalStorage Hook</CardTitle>
                <p className="text-gray-600 mt-2">状态持久化，刷新页面后数据保留</p>
              </CardHeader>
              <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-700 dark:text-gray-300">
                        计数器 (持久化到 localStorage):
                      </span>
                      <span className="text-4xl font-bold text-emerald-600">{count}</span>
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
          </ScrollSection>

          {/* Section 5: Utility Functions - 沉入效果 */}
          <ScrollSection delay={0.75}>
            <Card className="backdrop-blur-xl bg-white/95 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">🛠️ 工具函数演示</CardTitle>
                <p className="text-gray-600 mt-2">实用的工具函数集合</p>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-medium">日期格式化</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {formatDate(new Date())}
                      </p>
                      <Button size="sm" onClick={handleShowDate}>
                        显示当前时间
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">随机字符串</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        生成指定长度的随机字符串
                      </p>
                      <Button size="sm" onClick={handleGenerateRandom}>
                        生成随机字符串
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">文件大小格式化</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        将字节数转换为可读格式
                      </p>
                      <Button size="sm" onClick={handleShowFileSize}>
                        查看示例
                      </Button>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">文本截断</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {truncateText('这是一段很长的文本，会被截断显示。', 15)}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">防抖 & 节流</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        优化高频事件处理
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">深拷贝</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        对象和数组的深度复制
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </ScrollSection>

          {/* Section 6: All Utility Functions List */}
          <ScrollSection delay={0.9}>
            <Card className="backdrop-blur-xl bg-white/95 shadow-2xl mb-20">
              <CardHeader>
                <CardTitle className="text-2xl">📋 可用工具函数列表</CardTitle>
              </CardHeader>
              <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        formatDate(date, format)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">格式化日期</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        debounce(func, wait)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">防抖函数</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        throttle(func, limit)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">节流函数</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        deepClone(obj)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">深拷贝对象</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        randomString(length)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">生成随机字符串</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        formatFileSize(bytes)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">格式化文件大小</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        isValidEmail(email)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">验证邮箱格式</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        truncateText(text, maxLength)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">截断文本</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded">
                      <code className="text-emerald-600 dark:text-emerald-400">
                        delay(ms)
                      </code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">延迟执行</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </ScrollSection>
        </div>
      </div>
    </main>
  );
}
