import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ChevronDown, Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import ParallaxLayer from './ParallaxLayer';

// Tech stack logos (SVG paths / simple icons for floating badges)
const techLogos = [
  { name: 'React', color: '#61DAFB', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z' },
  { name: 'Python', color: '#3776AB', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
  { name: 'JS', color: '#F7DF1E', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' },
  { name: 'Node', color: '#339933', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
  { name: 'Tailwind', color: '#06B6D4', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  { name: 'Git', color: '#F05032', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' },
];

const FloatingLogo = ({ logo, index, mx, my, reducedMotion }) => {
  const baseX = useTransform(mx, (v) => v * (30 + index * 12) * (index % 2 === 0 ? 1 : -1));
  const baseY = useTransform(my, (v) => v * (25 + index * 10) * (index % 2 === 0 ? -1 : 1));
  const floatY = useTransform(
    [baseY],
    ([y]) => y + Math.sin(Date.now() / 1000 + index) * 8
  );

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${12 + (index % 3) * 28}%`,
        top: `${18 + Math.floor(index / 3) * 32}%`,
        x: reducedMotion ? 0 : baseX,
        y: reducedMotion ? 0 : baseY,
      }}
      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
      animate={{
        opacity: [0.15, 0.35, 0.15],
        scale: [0.9, 1.05, 0.9],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 6 + index * 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.3,
      }}
    >
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl backdrop-blur-md border flex items-center justify-center shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${logo.color}22, ${logo.color}08)`,
          borderColor: `${logo.color}40`,
          boxShadow: `0 0 24px ${logo.color}25`,
        }}
      >
        <span
          className="text-xs sm:text-sm font-bold tracking-tight"
          style={{ color: logo.color }}
        >
          {logo.name}
        </span>
      </div>
    </motion.div>
  );
};

const Hero = ({ profileData, darkMode }) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ARUN-KR07', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/arun-k-r-51867a270', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/arun_kr_07', label: 'Instagram' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=arunkrkr12@gmail.com', label: 'Gmail' },
  ];

  const sectionRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springCfg = { stiffness: 40, damping: 18, mass: 0.8 };
  const mx = useSpring(rawX, springCfg);
  const my = useSpring(rawY, springCfg);

  const [reducedMotion, setReducedMotion] = useState(false);

  // Scroll-based parallax for extra depth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handleMQ = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.('change', handleMQ);

    const handleMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      rawX.set(nx);
      rawY.set(ny);
    };
    const node = sectionRef.current;
    node?.addEventListener('mousemove', handleMove);
    return () => {
      node?.removeEventListener('mousemove', handleMove);
      mq.removeEventListener?.('change', handleMQ);
    };
  }, [rawX, rawY]);

  // Multi-layer orb parallax (cursor + opposite drift)
  const orbX = useTransform(mx, (v) => v * -90);
  const orbY = useTransform(my, (v) => v * -90);
  const orbX2 = useTransform(mx, (v) => v * 55);
  const orbY2 = useTransform(my, (v) => v * 55);
  const orbX3 = useTransform(mx, (v) => v * -40);
  const orbY3 = useTransform(my, (v) => v * -40);

  // Title letter-by-letter stagger
  const titleLetters = 'ARUN'.split('');
  const accentLetters = 'KR'.split('');

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Ambient grid */}
      <motion.div
        className={`absolute inset-0 z-0 pointer-events-none ${darkMode ? 'opacity-[0.06]' : 'opacity-[0.04]'}`}
        style={{
          backgroundImage: `linear-gradient(${darkMode ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)',
          y: reducedMotion ? 0 : scrollY,
        }}
      />

      {/* Floating tech logos (parallax + float) */}
      {!reducedMotion &&
        techLogos.map((logo, i) => (
          <FloatingLogo
            key={logo.name}
            logo={logo}
            index={i}
            mx={mx}
            my={my}
            reducedMotion={reducedMotion}
          />
        ))}

      {/* Background orbs — 3 layers with different speeds */}
      <ParallaxLayer speed={-0.35} className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          style={reducedMotion ? {} : { x: orbX, y: orbY }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[620px] h-[620px] bg-gradient-to-tr from-emerald-500/25 via-teal-500/15 to-cyan-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ParallaxLayer>

      <ParallaxLayer speed={0.45} className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          style={reducedMotion ? {} : { x: orbX2, y: orbY2 }}
          className="absolute bottom-10 right-6 w-[420px] h-[420px] bg-gradient-to-br from-teal-500/20 to-emerald-600/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </ParallaxLayer>

      <ParallaxLayer speed={-0.2} className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          style={reducedMotion ? {} : { x: orbX3, y: orbY3 }}
          className="absolute top-1/3 left-8 w-72 h-72 bg-gradient-to-bl from-cyan-400/15 to-emerald-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </ParallaxLayer>

      {/* Main content */}
      <motion.div
        className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center"
        style={reducedMotion ? {} : { y: scrollY, opacity: scrollOpacity, scale: scrollScale }}
      >
        {/* Availability badge */}
        <ParallaxLayer speed={-0.12}>
          <motion.div
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8 ${darkMode
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-emerald-50 border-emerald-300 text-emerald-700'
              }`}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-semibold tracking-wider uppercase">
              Full Stack Python & React Developer
            </span>
          </motion.div>
        </ParallaxLayer>

        {/* Title with letter stagger */}
        <ParallaxLayer speed={-0.18}>
          <motion.h1
            className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-6 flex flex-wrap justify-center gap-x-2"
            initial="hidden"
            animate="visible"
          >
            {titleLetters.map((letter, i) => (
              <motion.span
                key={`t-${i}`}
                className={darkMode ? 'text-white' : 'text-slate-900'}
                variants={{
                  hidden: { opacity: 0, y: 40, rotateX: -40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    transition: { delay: 0.1 + i * 0.08, duration: 0.6, type: 'spring' },
                  },
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="w-3 sm:w-4" />
            <span className="relative inline-flex">
              {accentLetters.map((letter, i) => (
                <motion.span
                  key={`a-${i}`}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)]"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: { delay: 0.45 + i * 0.1, duration: 0.7, type: 'spring' },
                    },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.9, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>
        </ParallaxLayer>

        {/* Summary */}
        <ParallaxLayer speed={-0.1}>
          <motion.p
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal ${darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {profileData.summary}
          </motion.p>
        </ParallaxLayer>

        {/* CTAs */}
        <ParallaxLayer speed={-0.06}>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 shadow-xl shadow-emerald-500/25 border border-emerald-400/40 flex items-center gap-2 overflow-hidden"
              whileHover={{ scale: 1.06, boxShadow: '0 0 36px rgba(16,185,129,0.55)' }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
              />
              Explore Projects
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.a>

            <motion.a
              href="#contact"
              className={`px-7 py-3.5 rounded-full font-bold text-sm border transition-all ${darkMode
                  ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-emerald-500/50'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
                }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </ParallaxLayer>

        {/* Social icons */}
        <ParallaxLayer speed={0}>
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition-all duration-300 ${darkMode
                    ? 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-500/50 hover:bg-slate-50'
                  } shadow-md`}
                initial={{ opacity: 0, y: 16, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.08, type: 'spring', stiffness: 200 }}
                whileHover={{ scale: 1.18, y: -4, rotate: [0, -6, 6, 0] }}
                whileTap={{ scale: 0.92 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </ParallaxLayer>

        {/* Scroll indicator */}
        <motion.a
          href="#skills"
          className="mt-16 text-emerald-400 flex flex-col items-center gap-2 cursor-pointer group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.5 },
            y: { duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 group-hover:text-emerald-400 transition-colors">
            Scroll Down
          </span>
          <motion.div
            className="p-2 rounded-full border border-emerald-500/30 bg-emerald-500/10"
            whileHover={{ scale: 1.15, borderColor: 'rgba(16,185,129,0.6)' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;