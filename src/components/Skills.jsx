import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Code2, Database, Terminal, Wrench, Zap, Star } from 'lucide-react';
import ParallaxLayer from './ParallaxLayer';

const Skills = ({ skills, darkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 45, damping: 18 });
  const my = useSpring(rawY, { stiffness: 45, damping: 18 });
  const orbX = useTransform(mx, (v) => v * -80);
  const orbY = useTransform(my, (v) => v * -80);
  const orbX2 = useTransform(mx, (v) => v * 50);
  const orbY2 = useTransform(my, (v) => v * 50);

  useEffect(() => {
    const onMove = (e) => {
      if (!sectionRef.current) return;
      const r = sectionRef.current.getBoundingClientRect();
      rawX.set((e.clientX - r.left) / r.width - 0.5);
      rawY.set((e.clientY - r.top) / r.height - 0.5);
    };
    const el = sectionRef.current;
    el?.addEventListener('mousemove', onMove);
    return () => el?.removeEventListener('mousemove', onMove);
  }, [rawX, rawY]);

  const categories = [
    { id: 'all', label: 'Everything', icon: Sparkles },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'frontend', label: 'Frontend', icon: Code2 },
    { id: 'tools', label: 'Toolkit', icon: Wrench },
  ];

  const getCategory = (name) => {
    if (['Python', 'Django', 'MySQL', 'REST APIs'].includes(name)) return 'backend';
    if (['React.js', 'HTML5', 'CSS', 'Tailwind CSS', 'JavaScript', 'Bootstrap'].includes(name)) return 'frontend';
    return 'tools';
  };

  // Highlight a few “core” skills for the featured strip
  const coreNames = ['Python', 'React.js', 'Django', 'JavaScript'];
  const coreSkills = skills.filter((s) => coreNames.includes(s.name));
  const filtered = skills.filter(
    (s) => activeCategory === 'all' || getCategory(s.name) === activeCategory
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Soft grid */}
      <div
        className={`absolute inset-0 pointer-events-none ${darkMode ? 'opacity-[0.04]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: `linear-gradient(${darkMode ? '#fff' : '#000'} 1px, transparent 1px),
                            linear-gradient(90deg, ${darkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 50% at 50% 30%, black, transparent)',
        }}
      />

      {/* Parallax glows */}
      <ParallaxLayer speed={-0.3} className="absolute -left-24 top-20 w-[480px] h-[480px] pointer-events-none z-0">
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="w-full h-full rounded-full bg-emerald-500/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ParallaxLayer>
      <ParallaxLayer speed={0.35} className="absolute -right-20 bottom-10 w-96 h-96 pointer-events-none z-0">
        <motion.div
          style={{ x: orbX2, y: orbY2 }}
          className="w-full h-full rounded-full bg-teal-400/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </ParallaxLayer>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Hero-style header ─────────────────────────────────────────── */}
        <ParallaxLayer speed={-0.12}>
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-semibold tracking-widest uppercase mb-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Zap size={13} className="animate-pulse" />
              What I ship with
            </motion.div>

            <motion.h2
              className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              My digital{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                arsenal
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  style={{ transformOrigin: 'left' }}
                />
              </span>
            </motion.h2>

            <motion.p
              className={`max-w-lg mx-auto text-base sm:text-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              A tight stack I actually use — not a laundry list.
              <span className="block mt-1 text-emerald-400/90 font-medium">
                Backend power · Frontend polish · Tools that keep me fast.
              </span>
            </motion.p>
          </div>
        </ParallaxLayer>

        {/* ── Featured core skills strip ────────────────────────────────── */}
        {coreSkills.length > 0 && (
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star size={14} className="text-emerald-400" />
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Core strengths
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {coreSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className={`relative group p-5 rounded-2xl border overflow-hidden ${darkMode
                    ? 'bg-gradient-to-br from-emerald-500/10 to-slate-900/80 border-emerald-500/25'
                    : 'bg-gradient-to-br from-emerald-50 to-white border-emerald-200/80'
                    }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-400/20 transition-colors" />
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 mb-3">
                    {skill.icon || <span className="text-xs font-black">{skill.name.slice(0, 2)}</span>}
                  </div>
                  <h3 className={`font-bold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {skill.name}
                  </h3>
                  <p className={`text-[11px] mt-1 line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Filter ───────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const active = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold overflow-hidden ${active
                  ? 'text-white'
                  : darkMode
                    ? 'bg-slate-800/70 border border-slate-700 text-slate-300 hover:text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                {active && (
                  <motion.span
                    layoutId="skills-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon size={13} />
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── Full skills grid ─────────────────────────────────────────── */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -16, transition: { duration: 0.2 } }}
                transition={{ type: 'spring', stiffness: 140, damping: 20, delay: i * 0.035 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div
                  className={`relative h-full p-5 rounded-2xl border overflow-hidden flex gap-4 transition-all duration-400 ${darkMode
                    ? 'bg-slate-900/75 border-slate-800/90 hover:border-emerald-500/40'
                    : 'bg-white/95 border-slate-200 hover:border-emerald-400/50'
                    } backdrop-blur-xl shadow-lg`}
                >
                  {/* Emerald hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />

                  {/* Icon */}
                  <motion.div
                    className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25"
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill.icon || (
                      <span className="text-sm font-black">{skill.name.slice(0, 2)}</span>
                    )}
                  </motion.div>

                  {/* Text */}
                  <div className="min-w-0 flex-1 relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3
                        className={`font-bold text-base truncate transition-colors group-hover:text-emerald-400 ${darkMode ? 'text-white' : 'text-slate-900'
                          }`}
                      >
                        {skill.name}
                      </h3>
                      <span
                        className={`shrink-0 text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${darkMode
                          ? 'border-slate-700 text-slate-500'
                          : 'border-slate-200 text-slate-400'
                          }`}
                      >
                        {getCategory(skill.name)}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {skill.description}
                    </p>

                    {/* Progress */}
                    <div className="mt-3 h-1 rounded-full bg-slate-700/25 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 text-sm text-slate-500"
            >
              Nothing here yet — try another filter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;