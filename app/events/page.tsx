'use client';

import Image from 'next/image';
import { WaveSurface3D, PageNavigation } from '@/components';

export default function EventsPage() {
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
          <PageNavigation currentPage="events" />

          {/* 主要内容 */}
          <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-12 border border-white/30">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-8 flex items-center gap-4">
              <span className="text-6xl">💻</span>
              <span>Events</span>
            </h1>

            {/* 竞赛和活动 */}
            <div className="space-y-8 text-white/90">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Competitions</h2>
                <div className="space-y-4">
                  {/* 竞赛项目 */}
                  <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-xl p-8 backdrop-blur-sm border border-yellow-500/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl">🏆</span>
                          <h3 className="text-2xl font-semibold text-white">
                            RoboMaster Competition
                          </h3>
                        </div>
                        <p className="text-white/80 mb-3">
                          International robot competition featuring engineering and AI challenges
                        </p>
                        <div className="flex items-center gap-4 text-white/70 text-sm">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            2024
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Shenzhen, China
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-block px-4 py-2 bg-yellow-500/30 text-yellow-300 rounded-lg text-lg font-bold">
                          Top 16
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Robotics</span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Computer Vision</span>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded text-sm">Embedded Systems</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-8 backdrop-blur-sm border border-blue-500/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Image src="/images/robot-emoji.png" alt="Robot" width={48} height={48} className="w-12 h-12 object-contain" />
                          <h3 className="text-2xl font-semibold text-white">
                            AI Challenge - Robot Navigation
                          </h3>
                        </div>
                        <p className="text-white/80 mb-3">
                          Developed autonomous navigation system using reinforcement learning
                        </p>
                        <div className="flex items-center gap-4 text-white/70 text-sm">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            2023
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Online
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-block px-4 py-2 bg-blue-500/30 text-blue-300 rounded-lg text-lg font-bold">
                          Finalist
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">RL</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">PyTorch</span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">Navigation</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 活动 */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Activities</h2>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border-l-4 border-emerald-400">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Robotics Research Lab Member
                        </h3>
                        <p className="text-white/80 mb-3">
                          University of Macau Robotics Lab
                        </p>
                        <p className="text-white/70 text-sm">
                          Conducting research on robot manipulation and navigation algorithms
                        </p>
                      </div>
                      <span className="text-white/60 text-sm whitespace-nowrap">2023 - Present</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border-l-4 border-purple-400">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Tech Club President
                        </h3>
                        <p className="text-white/80 mb-3">
                          University of Macau Technology Club
                        </p>
                        <p className="text-white/70 text-sm">
                          Organizing coding workshops, hackathons, and tech talks
                        </p>
                      </div>
                      <span className="text-white/60 text-sm whitespace-nowrap">2023 - Present</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border-l-4 border-cyan-400">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Open Source Contributor
                        </h3>
                        <p className="text-white/80 mb-3">
                          Contributing to AI and Robotics open source projects
                        </p>
                        <p className="text-white/70 text-sm">
                          Active contributor to PyTorch, ROS, and Three.js ecosystem
                        </p>
                      </div>
                      <span className="text-white/60 text-sm whitespace-nowrap">2022 - Present</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 证书和奖项 */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🥇</span>
                      <h3 className="text-lg font-semibold">Best Paper Award</h3>
                    </div>
                    <p className="text-white/70 text-sm">
                      Student Research Symposium 2024
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⭐</span>
                      <h3 className="text-lg font-semibold">Dean&apos;s List</h3>
                    </div>
                    <p className="text-white/70 text-sm">
                      University of Macau 2022-2024
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">🎯</span>
                      <h3 className="text-lg font-semibold">Hackathon Winner</h3>
                    </div>
                    <p className="text-white/70 text-sm">
                      UM TechFest 2023
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">📜</span>
                      <h3 className="text-lg font-semibold">Research Grant</h3>
                    </div>
                    <p className="text-white/70 text-sm">
                      UM Student Research Award 2024
                    </p>
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
