'use client';

import { CodeIcon, CropIcon, CursorArrowIcon } from '@radix-ui/react-icons';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export function HeroScrollText({ className }: { className?: string }) {
  const t = useTranslations('index.hero');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    offset: ['start start', 'end end'],
    target: containerRef,
  });

  // Increased translation range for more pronounced movement
  const translate = useTransform(scrollYProgress, [0, 1], [30, -10]);

  // Adjusted spring configuration for more responsive animation
  const translateSpring = useSpring(translate, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  const mapping = useTransform(() => `${translateSpring.get()}%`);

  // Get the text content from translations
  const scrollText = t('scroll-text');
  // Repeat the text multiple times to create a continuous loop effect
  const repeatedText = `${scrollText} ${scrollText} ${scrollText}`;

  // Additional transforms based on scroll for more dynamic icons
  const rotateScroll = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scaleScroll = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacityScroll = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.7, 1, 1, 0.7],
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative min-h-max"
      style={{
        x: mapping,
        willChange: 'transform',
        translateZ: 0, // Force hardware acceleration
      }}
    >
      <div className="overflow-hidden">
        <p
          className={cn(
            'overflow-visible whitespace-nowrap text-[12vw] lowercase',
            className,
          )}
        >
          {repeatedText}
        </p>
      </div>

      <div className="pointer-events-none">
        {/* First row of icons */}
        <motion.div
          className="absolute left-[10%] top-[1vh] z-10 text-primary"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0 }}
        >
          <CropIcon className="h-[5vh] w-[5vh] md:h-[18vh] md:w-[18vh]" />
        </motion.div>

        <motion.div
          className="absolute left-[25%] top-[5vh] z-10 text-primary"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -8, 0, 8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0, rotate: rotateScroll }}
        >
          <CodeIcon className="h-[5vh] w-[5vh] md:h-[20vh] md:w-[20vh]" />
        </motion.div>

        <motion.div
          className="absolute left-[40%] top-[2vh] z-10 text-primary"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -5, 0, -10, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0, opacity: opacityScroll }}
        >
          <CursorArrowIcon className="h-[5vh] w-[5vh] md:h-[16vh] md:w-[16vh]" />
        </motion.div>

        <motion.div
          className="absolute right-[15%] top-[4vh] z-10 text-primary"
          animate={{
            rotate: [0, 15, 0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0, scale: scaleScroll }}
        >
          <CropIcon className="h-[5vh] w-[5vh] md:h-[20vh] md:w-[20vh]" />
        </motion.div>

        {/* Middle row of icons */}
        <motion.div
          className="absolute left-[18%] top-[50%] z-10 -translate-y-1/2 transform text-primary"
          animate={{
            x: [0, 10, 0, -10, 0],
            rotate: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0 }}
        >
          <CodeIcon className="h-[5vh] w-[5vh] md:h-[18vh] md:w-[18vh]" />
        </motion.div>

        <motion.div
          className="absolute right-[35%] top-[50%] z-10 -translate-y-1/2 transform text-primary"
          animate={{
            scale: [1, 0.9, 1.1, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0 }}
        >
          <CursorArrowIcon className="h-[5vh] w-[5vh] md:h-[20vh] md:w-[20vh]" />
        </motion.div>

        {/* Bottom row of icons */}
        <motion.div
          className="absolute bottom-[3vh] left-[30%] z-10 text-primary"
          animate={{
            y: [0, 8, 0],
            rotate: [0, 10, 0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0 }}
        >
          <CursorArrowIcon className="h-[5vh] w-[5vh] md:h-[19vh] md:w-[19vh]" />
        </motion.div>

        <motion.div
          className="absolute bottom-[1vh] right-[28%] z-10 text-primary"
          animate={{
            y: [0, 12, 0],
            x: [0, -8, 0, 8, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0 }}
        >
          <CropIcon className="h-[5vh] w-[5vh] md:h-[20vh] md:w-[20vh]" />
        </motion.div>

        <motion.div
          className="absolute bottom-[4vh] left-[50%] z-10 text-primary"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ translateZ: 0 }}
        >
          <CodeIcon className="h-[5vh] w-[5vh] md:h-[17vh] md:w-[17vh]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
