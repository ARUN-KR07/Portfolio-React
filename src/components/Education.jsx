import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import ParallaxLayer from './ParallaxLayer';

const Education = ({ education, darkMode }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section id="education" ref={containerRef} className="py-24 px-4 sm:px-6 max-w-5xl mx-auto relative">
      
      {/* Background Parallax Ambient Glow */}
      <ParallaxLayer speed={-0.2} className="absolute left-1/3 top-1/2 w-80 h-80 pointer-events-none opacity-15 z-0">
        <div className="w-full h-full bg-emerald-500 rounded-full blur-3xl" />
      </ParallaxLayer>

      {/* Section Header */}
      <ParallaxLayer speed={-0.1}>
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GraduationCap size={14} />
            Academic Background
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Journey</span>
          </motion.h2>
        </div>
      </ParallaxLayer>

      {/* Timeline Wrapper */}
      <div className="relative z-10">
        
        {/* Animated Central Timeline Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-800/40 rounded-full">
          <motion.div 
            className="w-full bg-gradient-to-b from-emerald-400 via-teal-400 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            style={{ height: lineHeight }}
          />
        </div>

        {education.map((edu, index) => {
          const isLeft = edu.side === "left";
          const parallaxSpeed = isLeft ? -0.1 : 0.1;

          return (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Center Dot Node */}
              <motion.div 
                className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-slate-900 border-2 border-emerald-400 flex items-center justify-center z-20 shadow-lg shadow-emerald-500/40"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </motion.div>

              {/* Card Container Box */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0 md:px-6">
                <ParallaxLayer speed={parallaxSpeed}>
                  <motion.div
                    className={`relative p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                      darkMode 
                        ? "bg-slate-900/80 border-slate-800/80 hover:border-emerald-500/50 shadow-xl" 
                        : "bg-white/90 border-slate-200 hover:border-emerald-500/50 shadow-lg"
                    } backdrop-blur-xl group overflow-hidden`}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Background Icon Watermark */}
                    <GraduationCap 
                      className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 text-emerald-400 transition-opacity duration-300 pointer-events-none" 
                      size={100} 
                    />

                    {/* Degree & Year */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
                        <Calendar size={12} />
                        {edu.year}
                      </span>
                    </div>

                    <h3 className={`text-xl font-extrabold mb-1 group-hover:text-emerald-400 transition-colors ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {edu.degree}
                    </h3>

                    <p className="text-xs font-semibold text-emerald-400/90 mb-3">
                      {edu.school}
                    </p>

                    <p className={`text-xs leading-relaxed mb-4 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                      {edu.desc}
                    </p>

                    {/* Optional Course Badges */}
                    {edu.courses && (
                      <div className="pt-3 border-t border-slate-700/20 flex flex-wrap gap-1.5">
                        {edu.courses.map((course, cIdx) => (
                          <span 
                            key={cIdx}
                            className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${
                              darkMode 
                                ? "bg-slate-800/80 border-slate-700/70 text-slate-300" 
                                : "bg-slate-100 border-slate-200 text-slate-700"
                            }`}
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </ParallaxLayer>
              </div>

              {/* Desktop Empty Spacer side */}
              <div className="hidden md:block md:w-5/12" />
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Education;