export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Next.js 14 模板</h1>
        <p className="text-muted-foreground mb-4">
          使用 TypeScript、Tailwind CSS 和 App Router 构建
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="/demo"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            查看组件演示
          </a>
          <a
            href="/wave"
            className="inline-block px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            查看波浪动画效果
          </a>
        </div>
      </div>
    </main>
  );
}
