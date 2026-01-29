'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface WaveSurface3DProps {
  className?: string;
}

export const WaveSurface3D = ({ className = '' }: WaveSurface3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Shader uniforms
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    };

    // Vertex shader - 创建波浪曲面和鼠标交互
    const vertexShader = `
      uniform float uTime;
      uniform vec2 uMouse;
      uniform vec2 uResolution;

      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vPosition;
      varying float vMouseInfluence;

      // Simplex noise function
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
          -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vUv = uv;
        vec3 pos = position;

        // 基础波浪动画 - 多层波浪叠加
        float wave1 = sin(pos.x * 0.5 + uTime * 0.8) * 0.5;
        float wave2 = sin(pos.y * 0.3 + uTime * 0.6) * 0.5;
        float wave3 = snoise(vec2(pos.x * 0.2, pos.y * 0.2 + uTime * 0.3)) * 1.5;

        // 组合基础波浪
        float elevation = wave1 + wave2 + wave3;

        // 鼠标交互 - 计算顶点到鼠标位置的距离
        vec2 mouseWorld = uMouse * 20.0 - 10.0;
        float distToMouse = distance(pos.xy, mouseWorld);
        float mouseRadius = 4.0;

        // 鼠标扰动效果 - 越近扰动越强
        vMouseInfluence = smoothstep(mouseRadius, 0.0, distToMouse);
        float mouseDisplacement = vMouseInfluence * 2.5 * sin(uTime * 3.0 - distToMouse * 2.0);

        // 涟漪扩散效果
        float ripple = sin(distToMouse * 2.0 - uTime * 2.5) * vMouseInfluence * 1.5;

        // 应用所有变形
        pos.z += elevation + mouseDisplacement + ripple;

        vElevation = pos.z;
        vPosition = pos;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    // Fragment shader - 绿白渐变流动条纹
    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;

      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vPosition;
      varying float vMouseInfluence;

      // Simplex noise function
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
          -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        // 创建流动条纹效果
        float stripes1 = sin(vPosition.x * 0.8 + uTime * 1.2 + vPosition.y * 0.3);
        float stripes2 = sin(vPosition.y * 0.6 + uTime * 0.9 + vPosition.x * 0.2);
        float stripes3 = snoise(vec2(vPosition.x * 0.3 + uTime * 0.5, vPosition.y * 0.3));

        // 组合条纹
        float stripePattern = (stripes1 + stripes2 + stripes3) * 0.333 + 0.5;

        // 添加湍流效果
        float turbulence = snoise(vec2(vPosition.x * 0.5 + uTime * 0.3, vPosition.y * 0.5)) * 0.5;
        stripePattern += turbulence;

        // 颜色定义
        vec3 black = vec3(0.0, 0.0, 0.0);           // 纯黑
        vec3 darkGreen = vec3(0.0, 0.15, 0.1);      // 深绿
        vec3 mediumGreen = vec3(0.0, 0.35, 0.25);   // 中绿
        vec3 brightGreen = vec3(0.0, 0.55, 0.4);    // 亮绿
        vec3 white = vec3(0.9, 1.0, 0.95);          // 白

        // 基于高度和条纹混合颜色
        vec3 color;

        // 基础颜色从黑色到深绿
        float heightFactor = (vElevation + 2.0) / 4.0;
        heightFactor = clamp(heightFactor, 0.0, 1.0);

        color = mix(black, darkGreen, heightFactor * 0.5);

        // 添加条纹效果
        float stripeIntensity = smoothstep(-0.5, 0.8, stripePattern);
        vec3 stripeColor = mix(mediumGreen, brightGreen, stripeIntensity);
        color = mix(color, stripeColor, stripeIntensity * 0.7);

        // 高亮条纹（白色）
        float whiteStripes = smoothstep(0.6, 0.9, stripePattern);
        color = mix(color, white, whiteStripes * 0.6);

        // 鼠标位置高亮
        color += vec3(0.1, 0.2, 0.15) * vMouseInfluence;

        // 添加深度感
        float depth = 1.0 - (vPosition.z + 3.0) / 6.0;
        depth = clamp(depth, 0.3, 1.0);
        color *= depth;

        // 边缘发光
        float edgeGlow = smoothstep(0.3, 0.5, abs(vUv.x - 0.5)) *
                        smoothstep(0.3, 0.5, abs(vUv.y - 0.5));
        color += vec3(0.0, 0.1, 0.05) * (1.0 - edgeGlow);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // 创建高分辨率平面网格
    const geometry = new THREE.PlaneGeometry(20, 20, 256, 256);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      wireframe: false,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI * 0.4; // 倾斜视角
    scene.add(mesh);

    // 添加线框层增强科技感
    const wireframeMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader: `
        uniform float uTime;
        varying float vElevation;
        varying float vMouseInfluence;

        void main() {
          vec3 color = vec3(0.0, 0.3, 0.2);
          color += vec3(0.0, 0.2, 0.15) * vMouseInfluence;
          color *= 0.3; // 降低线框亮度
          gl_FragColor = vec4(color, 0.15); // 低透明度
        }
      `,
      uniforms,
      wireframe: true,
      transparent: true,
    });

    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    wireframeMesh.rotation.x = -Math.PI * 0.4;
    wireframeMesh.position.y = 0.01;
    scene.add(wireframeMesh);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      targetMouseRef.current.x = (event.clientX - rect.left) / rect.width;
      targetMouseRef.current.y = 1.0 - (event.clientY - rect.top) / rect.height;
    };

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      uniforms.uTime.value = elapsedTime;

      // 平滑鼠标移动
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.08;
      uniforms.uMouse.value.set(mouseRef.current.x, mouseRef.current.y);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Store container reference for cleanup
    const currentContainer = containerRef.current;

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      material.dispose();
      wireframeMaterial.dispose();
      geometry.dispose();
      if (currentContainer && renderer.domElement) {
        currentContainer.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};
