'use client';

import { WaveSurface3D } from '@/components/WaveSurface3D';

export default function PersonalInfoPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* 3D波浪曲面背景 */}
      <div className="fixed inset-0">
        <WaveSurface3D />
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          {/* 返回按钮 */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-lg hover:bg-white/30 transition-all drop-shadow-2xl border border-white/40 hover:scale-105 transform"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back to Home</span>
            </a>
          </div>

          {/* 主要内容 */}
          <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-12 border border-white/30">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-8 flex items-center gap-4">
              <span className="text-6xl">🎓</span>
              <span>Personal INFO</span>
            </h1>

            {/* 教育背景 */}
            <div className="space-y-8 text-white/90">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm space-y-6">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          University of Macau
                        </h3>
                        <p className="text-white/80 text-lg">Bachelor of Science in Computer Science</p>
                      </div>
                      <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-sm font-medium">
                        Current
                      </span>
                    </div>
                    <p className="text-white/60">Expected Graduation: 2026</p>
                    <p className="text-white/70 mt-3">
                      Avenida da Universidade, Taipa, Macau, China
                    </p>
                  </div>
                </div>
              </section>

              {/* 经历 */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Research Assistant
                        </h3>
                        <p className="text-white/80 mb-2">University of Macau</p>
                        <p className="text-white/70 text-sm">
                          Working on robotics and reinforcement learning projects
                        </p>
                      </div>
                      <span className="text-white/60 text-sm">2024 - Present</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Software Developer Intern
                        </h3>
                        <p className="text-white/80 mb-2">Tech Company</p>
                        <p className="text-white/70 text-sm">
                          Full-stack development using React, Next.js, and Three.js
                        </p>
                      </div>
                      <span className="text-white/60 text-sm">2023 - 2024</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 基本信息 */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Name</p>
                    <p className="text-white text-xl font-semibold">Huang Qi</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <p className="text-white text-lg">huangqi@um.edu.mo</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Location</p>
                    <p className="text-white text-lg">Macau, China</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Languages</p>
                    <p className="text-white text-lg">Chinese, English</p>
                  </div>
                </div>
              </section>
            </div>
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
