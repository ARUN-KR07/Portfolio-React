import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, Building, MapPin, Briefcase, Calendar, Sparkles } from 'lucide-react';
import ParallaxLayer from './ParallaxLayer';

const Experience = ({ experience, darkMode }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 max-w-5xl mx-auto relative">
      
      {/* Background Parallax Orbs */}
      <ParallaxLayer speed={0.3} className="absolute right-0 top-1/3 w-96 h-96 pointer-events-none opacity-20 z-0">
        <div className="w-full h-full bg-teal-500 rounded-full blur-3xl" />
      </ParallaxLayer>

      {/* Section Title */}
      <ParallaxLayer speed={-0.15}>
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Briefcase size={14} />
            Career Progression
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Experience</span>
          </motion.h2>
        </div>
      </ParallaxLayer>

      {/* Experience Main Card Container */}
      <div className="relative z-10">
        <ParallaxLayer speed={-0.05}>
          <motion.div
            className={`relative p-8 sm:p-10 rounded-3xl border ${
              darkMode 
                ? "bg-slate-900/80 border-slate-800/90 shadow-2xl shadow-emerald-950/20" 
                : "bg-white/90 border-slate-200 shadow-xl"
            } backdrop-blur-2xl overflow-hidden`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Ambient Corner Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Content */}
            <div className="flex flex-wrap items-start justify-between gap-6 mb-8 pb-8 border-b border-slate-700/20">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                    {experience.type}
                  </span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-3">
                  {experience.role}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <Building size={16} className="text-emerald-400" />
                    {experience.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={16} className="text-emerald-400" />
                    {experience.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                <Sparkles size={14} />
                Full-Stack Backend Focus
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h4 className={`text-base font-bold mb-4 flex items-center gap-2 ${darkMode ? "text-slate-200" : "text-slate-800"}`}>
                <CheckCircle2 size={18} className="text-emerald-400" />
                Key Contributions & Responsibilities
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.responsibilities.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border ${
                      darkMode ? "bg-slate-800/50 border-slate-700/60" : "bg-slate-50 border-slate-200"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.02, x: 3 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-sm shadow-emerald-400" />
                    <span className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Tag Section */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-wider uppercase mb-3 text-slate-400">
                Technologies Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-mono font-semibold text-emerald-400"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    #{tech}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>
        </ParallaxLayer>
      </div>

    </section>
  );
};

export default Experience;