'use client';

import { WaveSurface3D, PageNavigation } from '@/components';

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
          {/* 页面导航 */}
          <PageNavigation currentPage="personal-info" />

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
                        
                        <p className="text-white/80 text-lg">Robotic and Autonomous Systems</p>
                        <p className="text-white/80 text-lg">Research Direction: Legged Robot & Locomation & Navigation</p>
                      </div>
                      <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-sm font-medium">
                        Master
                      </span>
                    </div>                   

                    <p className="text-white/60">Expected Graduation: 2027</p>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                          Xi&apos;an Jiaotong University
                        </h3>
                        <p className="text-white/80 text-lg">Measurement and Control Technology</p>
                      </div>
                      <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium">
                        Bachelor
                      </span>
                    </div>
                    <p className="text-white/80 text-lg">Research Direction: Embedded Hardware & Software</p>
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
                        <p className="text-white/80 mb-2">Xi&apos;an Jiaotong University</p>
                        <p className="text-white/70 text-sm mb-3">
                          Participated in the project &quot;Research on the construction process of fully mechanized track changing&quot;.
                        </p>
                        <div className="space-y-2">
                          <p className="text-white/60 text-sm font-medium mb-2">Achievement:</p>
                          <ul className="space-y-1.5 text-white/70 text-base">
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5 text-sm">▹</span>
                              <span>Proposing YoPNET target detection algorithm for inspection and maintenance of railroad components</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5 text-sm">▹</span>
                              <span>Publication of one Chinese core journal</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5 text-sm">▹</span>
                              <span>Two EI conference papers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-emerald-400 mt-0.5 text-sm">▹</span>
                              <span>One patent</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <span className="text-white/60 text-sm">2024.03 - 2025.07</span>
                    </div>
                  </div>

                </div>
              </section>

              {/* 其他信息 */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Other Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Technical Skills</p>
                    <p className="text-white text-lg">Python, ROS, Issacsim, SLAM</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Research Areas</p>
                    <p className="text-white text-lg">VLN, Reinforcement-Learning</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Interests</p>
                    <p className="text-white text-lg">Robotics, Open Source, AI Research</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-white/60 text-sm mb-1">Location</p>
                    <p className="text-white text-lg">Guangdong, China</p>
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
