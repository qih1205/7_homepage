'use client';

import Image from 'next/image';
import { WaveSurface3D, PageNavigation } from '@/components';

export default function ResearchPage() {
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
          <PageNavigation currentPage="research" />

          {/* 主要内容 */}
          <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-12 border border-white/30">
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl mb-8 flex items-center gap-4">
              <Image src="/images/robot-emoji.png" alt="Robot" width={96} height={96} className="w-24 h-24 object-contain" />
              <span>Research Interests</span>
            </h1>

            {/* 研究领域 */}
            <div className="space-y-8 text-white/90">
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Research Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Robotics */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🦾</span>
                      <h3 className="text-2xl font-semibold">Robotics</h3>
                    </div>
                    <p className="text-white/80 mb-4">
                      Shaping the robots that are shaping our future
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Robot Manipulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Mobile Navigation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span>Human-Robot Interaction</span>
                      </li>
                    </ul>
                  </div>

                  {/* Reinforcement Learning */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">🧠</span>
                      <h3 className="text-2xl font-semibold">Reinforcement Learning</h3>
                    </div>
                    <p className="text-white/80 mb-4">
                      Training intelligent agents through interaction
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>Deep RL Algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>Multi-Agent Systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>Policy Optimization</span>
                      </li>
                    </ul>
                  </div>

                  {/* Vision-Language Navigation */}
                  <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">👁️</span>
                      <h3 className="text-2xl font-semibold">VLN</h3>
                    </div>
                    <p className="text-white/80 mb-4">
                      Vision-Language Navigation for Embodied AI
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        <span>Visual Reasoning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        <span>Language Grounding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">▹</span>
                        <span>Cross-Modal Learning</span>
                      </li>
                    </ul>
                  </div>

                  {/* AI */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-8 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl">✨</span>
                      <h3 className="text-2xl font-semibold">Artificial Intelligence</h3>
                    </div>
                    <p className="text-white/80 mb-4">
                      Building intelligent systems for real-world applications
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Deep Learning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Computer Vision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 mt-1">▹</span>
                        <span>Natural Language Processing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 研究项目 */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border-l-4 border-cyan-400">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Autonomous Robot Navigation
                    </h3>
                    <p className="text-white/70 mb-3">
                      Developing robust navigation systems for mobile robots using reinforcement learning and visual SLAM
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">RL</span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">ROS</span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded text-sm">SLAM</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border-l-4 border-purple-400">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Vision-Language Agent
                    </h3>
                    <p className="text-white/70 mb-3">
                      Building embodied AI agents that can follow natural language instructions in visual environments
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">VLN</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">Transformers</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">PyTorch</span>
                    </div>
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
