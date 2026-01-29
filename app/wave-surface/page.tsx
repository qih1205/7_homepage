'use client';

import { WaveSurface3D } from '@/components/WaveSurface3D';

export default function WaveSurfacePage() {
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
            3D 波浪曲面
          </h1>

          {/* 描述 */}
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg mb-12">
            基于 Three.js + GLSL Shader 的流动波浪效果
          </p>

          {/* 特性列表 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-white mb-2">流动波浪</h3>
              <p className="text-white/70">
                使用顶点着色器实现的平滑程序化波浪曲面
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">绿白渐变</h3>
              <p className="text-white/70">
                黑色背景搭配绿白色流动条纹，营造科技感
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🖱️</div>
              <h3 className="text-xl font-bold text-white mb-2">鼠标交互</h3>
              <p className="text-white/70">
                移动鼠标体验曲面跟随扰动变形效果
              </p>
            </div>
          </div>

          {/* 操作提示 */}
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
            <p className="text-2xl text-white drop-shadow-lg mb-4">
              试着移动鼠标查看效果 →
            </p>
            <p className="text-white/80">
              曲面会根据鼠标位置产生实时的扰动变形和涟漪扩散
            </p>
          </div>

          {/* 返回按钮 */}
          <div className="pt-12">
            <a
              href="/"
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg rounded-lg hover:bg-white/30 transition-all drop-shadow-2xl border border-white/40 hover:scale-105 transform"
            >
              ← 返回首页
            </a>
          </div>
        </div>
      </div>

      {/* 底部技术说明 */}
      <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-6xl mx-auto text-center text-white/60 text-sm">
          <p>技术栈: Three.js | WebGL | GLSL Vertex Shader | GLSL Fragment Shader | Simplex Noise</p>
        </div>
      </div>
    </main>
  );
}
