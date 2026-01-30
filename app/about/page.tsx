'use client';

import { WaveSurface3D } from '@/components/WaveSurface3D';

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-8">
              About Me
            </h1>

            {/* 个人信息 */}
            <div className="space-y-8 text-white/90">
              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>🎓</span>
                  <span>Education</span>
                </h2>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">University of Macau</h3>
                  <p className="text-white/70 mb-2">Bachelor of Science in Computer Science</p>
                  <p className="text-white/60 text-sm">Expected Graduation: 2026</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>🤖</span>
                  <span>Research Interests</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold mb-2">Robotics</h3>
                    <p className="text-white/70 text-sm">
                      Shaping the robots that are shaping our future
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold mb-2">Reinforcement Learning</h3>
                    <p className="text-white/70 text-sm">
                      Training intelligent agents through interaction
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold mb-2">Vision-Language Navigation</h3>
                    <p className="text-white/70 text-sm">
                      Embodied AI and visual reasoning
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold mb-2">Artificial Intelligence</h3>
                    <p className="text-white/70 text-sm">
                      Building intelligent systems for real-world applications
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>💻</span>
                  <span>Technical Skills</span>
                </h2>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-3">
                    {['Python', 'PyTorch', 'TensorFlow', 'Three.js', 'WebGL', 'React', 'Next.js', 'TypeScript', 'C++', 'ROS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span>📍</span>
                  <span>Location</span>
                </h2>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <p className="text-white/90">
                    University of Macau<br />
                    Avenida da Universidade, Taipa<br />
                    Macau, China
                  </p>
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
