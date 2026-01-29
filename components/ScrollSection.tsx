'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

export interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollSection = ({ children, className = '', delay = 0 }: ScrollSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 落叶效果：从右上方进入 → 停留 → 向右飘 → 向左下方飘走
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.7, 0.9, 1], [0, 1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7, 1], [-200, 0, 0, 150, 700]);
  const x = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.7, 1], [400, 0, 0, 100, -500]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [3, 0, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0.85, 1, 1, 0.7]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        x,
        rotateZ,
        scale,
      }}
      className={className}
      initial={{ opacity: 0, x: 400, y: -200, rotateZ: 3 }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

export interface FloatingEntranceProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'bottom';
}

export const FloatingEntrance = ({
  children,
  className = '',
  delay = 0,
  direction = 'bottom',
}: FloatingEntranceProps) => {
  const entranceVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -200 : direction === 'right' ? 200 : 0,
      y: direction === 'bottom' ? 150 : 0,
      rotate: direction === 'bottom' ? -5 : 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={entranceVariants}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut' as const,
          delay: delay + 1.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
