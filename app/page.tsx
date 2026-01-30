'use client';

import { useState } from 'react';
import { WaveSurface3D, AIChat } from '@/components';

export default function Home() {
  const [emailMenuOpen, setEmailMenuOpen] = useState(false);

  const emailServices = [
    {
      name: 'Gmail',
      icon: '📧',
      color: 'from-red-500/20 to-yellow-500/20',
      borderColor: 'border-red-500/40',
      email: 'qih1205@gmail.com',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=qih1205@gmail.com'
    },
    {
      name: 'Outlook',
      icon: '🔵',
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/40',
      email: 'qih0012@qq.com',
      url: 'https://outlook.live.com/owa/?path=/mail/action/compose&to=qih0012@qq.com&subject=Hello'
    },
    {
      name: 'QQ Mail',
      icon: '🐧',
      color: 'from-blue-600/20 to-blue-400/20',
      borderColor: 'border-blue-600/40',
      email: 'qih0012@qq.com',
      url: 'mailto:qih0012@qq.com' // QQ邮箱需要使用mailto或手动登录
    },
    {
      name: '163 Mail',
      icon: '📮',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/40',
      email: 'qih0012@qq.com',
      url: 'mailto:qih0012@qq.com' // 163邮箱需要使用mailto或手动登录
    },
  ];
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
            <a
              href="/personal-info"
              className="group bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105 transform cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">Personal INFO</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                Education<br />
                Experience
              </p>
              <div className="mt-4 flex items-center gap-2 text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Details</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            <a
              href="/research"
              className="group bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105 transform cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform flex items-center justify-center">
                <img src="/images/robot-emoji.png" alt="Robot" className="w-16 h-16 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Research Interests</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                Robotics & AI<br />
                RL & VLN
              </p>
              <div className="mt-4 flex items-center gap-2 text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Details</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>

            <a
              href="/events"
              className="group bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-105 transform cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Events</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                Activities<br />
                Competitions<br />
                Open Source
              </p>
              <div className="mt-4 flex items-center gap-2 text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Details</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>

          {/* 操作提示 */}
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-white/30 flex items-center justify-between">
            <div className="flex-1">
              <p className="text-2xl text-white drop-shadow-lg mb-4">
                Connection
              </p>
              <p className="text-white/80">
                Click here to send an e-mail to me.
              </p>
            </div>
            <div
              className="relative ml-6"
              onMouseEnter={() => setEmailMenuOpen(true)}
              onMouseLeave={() => setEmailMenuOpen(false)}
            >
              <button
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg rounded-lg hover:bg-white/30 transition-all drop-shadow-2xl border border-white/40 hover:scale-105 transform flex items-center gap-2 group"
              >
                <span>Contact Me</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              {/* 邮箱下拉菜单 */}
              <div
                className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 w-56 bg-black/90 backdrop-blur-xl rounded-xl border border-white/30 shadow-2xl transition-all duration-300 ${
                  emailMenuOpen
                    ? 'opacity-100 translate-x-0 pointer-events-auto visible'
                    : 'opacity-0 -translate-x-2 pointer-events-none invisible'
                }`}
              >
                <div className="p-2 space-y-1">
                  <p className="text-white/60 text-xs px-2 py-1 border-b border-white/20 mb-1">
                    Choose email service:
                  </p>
                  {emailServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block bg-gradient-to-r ${service.color} ${service.borderColor} border rounded-lg p-2 hover:scale-105 transition-transform`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{service.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-semibold text-sm">{service.name}</p>
                          <p className="text-white/70 text-xs truncate">{service.email}</p>
                        </div>
                        <svg className="w-4 h-4 text-white/50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat */}
      <AIChat />

      {/* 底部技术说明 */}
      <div className="fixed bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="max-w-6xl mx-auto text-center text-white/60 text-sm">
          <p>University of Macau, Avenida da Universidade, Taipa, Macau, China</p>
        </div>
      </div>
    </main>
  );
}
