import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * ParallaxLayer Component
 * Provides smooth vertical/horizontal parallax translation based on scroll position.
 * 
 * @param {number} speed - Parallax speed multiplier (positive for downward drift, negative for upward movement)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Component content
 * @param {string} direction - 'vertical' or 'horizontal'
 * @param {Array<number>} offset - Scroll range offset e.g. ['start end', 'end start']
 */
const ParallaxLayer = ({
  speed = 0.5,
  className = "",
  children,
  direction = "vertical",
  offset = ["start end", "end start"],
  rotate = 0,
  scaleRange = null
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset
  });

  // Calculate pixel displacement range based on speed multiplier
  const distance = speed * 150;

  // Raw values derived from scroll
  const rawY = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const rawX = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);

  // Smooth spring physics for fluid movement
  const springY = useSpring(rawY, { stiffness: 100, damping: 20 });
  const springX = useSpring(rawX, { stiffness: 100, damping: 20 });
  const springRotate = useSpring(rawRotate, { stiffness: 90, damping: 25 });

  // Scale transform — ALWAYS called unconditionally (React Rules of Hooks).
  // When scaleRange is not provided, we use a neutral [1,1,1] so the hook
  // is still invoked but has no visual effect.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    scaleRange ?? [1, 1, 1]
  );

  const style = {
    ...(direction === "vertical" ? { y: springY } : { x: springX }),
    ...(rotate !== 0 ? { rotate: springRotate } : {}),
    ...(scaleRange != null ? { scale } : {}),
  };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
