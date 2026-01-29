'use client';

import { useState } from 'react';
import { WaveBackground } from '@/components/WaveBackground';
import { Button } from '@/components';

export default function WavePage() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Wave Background */}
      <WaveBackground />

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-bold text-white drop-shadow-2xl animate-pulse">
            FUN GUI
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
            Fluid Wave Animation with Three.js & GLSL Shaders
          </p>

          {/* Begin Buttons */}
          <div className="flex flex-wrap gap-6 justify-center mt-12">
            <Button
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
              style={{ animationDuration: '2s' }}
              onMouseEnter={() => setHoveredButton('begin1')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              BEGIN
            </Button>
            <Button
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
              style={{ animationDuration: '2.5s', animationDelay: '0.3s' }}
              onMouseEnter={() => setHoveredButton('begin2')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              BEGIN
            </Button>
            <Button
              size="lg"
              className="bg-emerald-700 hover:bg-emerald-800 text-white shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce"
              style={{ animationDuration: '2.2s', animationDelay: '0.6s' }}
              onMouseEnter={() => setHoveredButton('begin3')}
              onMouseLeave={() => setHoveredButton(null)}
            >
              BEGIN
            </Button>
          </div>

          {/* Hover Status */}
          {hoveredButton && (
            <div className="mt-8 p-4 bg-white/20 backdrop-blur-md rounded-lg text-white">
              Hovering: {hoveredButton}
            </div>
          )}

          {/* Info Card */}
          <div className="mt-16 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">About This Effect</h2>
            <div className="text-white/90 space-y-2 text-left">
              <p><strong>Technique:</strong> GLSL Fragment Shader with Simplex Noise</p>
              <p><strong>Animation:</strong> Fractal Brownian Motion (FBM) for organic fluid waves</p>
              <p><strong>Colors:</strong> Pink to blue gradient palette</p>
              <p><strong>Interactivity:</strong> Mouse position influences wave patterns</p>
              <p><strong>Performance:</strong> GPU-accelerated via Three.js WebGL renderer</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white/20 backdrop-blur-md border-white/40 text-white hover:bg-white/30"
              onClick={() => window.location.href = '/'}
            >
              返回首页
            </Button>
            <Button
              variant="outline"
              className="bg-white/20 backdrop-blur-md border-white/40 text-white hover:bg-white/30"
              onClick={() => window.location.href = '/demo'}
            >
              组件演示
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-4 left-0 right-0 text-center z-10">
        <p className="text-white/60 text-sm">
          Move your mouse to interact with the waves • Built with Next.js 14 + Three.js
        </p>
      </div>
    </main>
  );
}
