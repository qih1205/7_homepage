'use client';

import { WaveSurface3D } from '@/components/WaveSurface3D';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* 3D波浪曲面背景 */}
      <div className="fixed inset-0">
        <WaveSurface3D />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="text-center space-y-6 max-w-3xl">
          {/* 标题 */}
          <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl mb-8">
            Hi, I'm HuangQi
          </h1>

          {/* 描述 */}
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg mb-12">
            Shaping the robots that are shaping the future
          </p>

          {/* 特性列表 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">Personal INFO</h3>
              <p className="text-white/70">
                Education<br />
                Experience
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">Research Interests</h3>
              <p className="text-white/70">
                Robotics & AI<br />
                RL & VLN
                
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Events</h3>
              <p className="text-white/70">
                Competitions<br />
                Activities
              </p>
            </div>
          </div>

          {/* 操作提示 */}
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/30 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-2xl text-white drop-shadow-lg mb-4">
                More details here →
              </p>
              <p className="text-white/80">
                曲面会根据鼠标位置产生实时的扰动变形和涟漪扩散
              </p>
            </div>
            <a
              href="/about"
              className="ml-6 px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg rounded-lg hover:bg-white/30 transition-all drop-shadow-2xl border border-white/40 hover:scale-105 transform flex items-center gap-2 group"
            >
              <span>Learn More</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* 导航按钮 */}
          <div className="pt-12 flex gap-4 justify-center flex-wrap">
            <a
              href="/demo"
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg rounded-lg hover:bg-white/30 transition-all drop-shadow-2xl border border-white/40 hover:scale-105 transform"
            >
              查看组件演示 →
            </a>
            <a
              href="/wave-surface"
              className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg rounded-lg hover:bg-white/20 transition-all drop-shadow-2xl border border-white/30 hover:scale-105 transform"
            >
              原效果页面
            </a>
          </div>
        </div>
      </div>

      {/* 底部技术说明 */}
      <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-6xl mx-auto text-center text-white/60 text-sm">
          <p>University of Macau, Avenida da Universidade, Taipa, Macau, China</p>
        </div>
      </div>
    </main>
  );
}
