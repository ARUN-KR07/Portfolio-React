import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2, ExternalLink, Shield, Target, Clock, Layers } from 'lucide-react';
import ParallaxLayer from './ParallaxLayer';

const Projects = ({ projects, darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative">
      
      {/* Background Parallax Orbs */}
      <ParallaxLayer speed={-0.3} className="absolute left-1/4 top-1/4 w-96 h-96 pointer-events-none opacity-15 z-0">
        <div className="w-full h-full bg-cyan-500 rounded-full blur-3xl" />
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
            <Code2 size={14} />
            Featured Work & Innovations
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Projects</span>
          </motion.h2>

          <motion.p 
            className={`max-w-xl mx-auto text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Real-world full-stack web applications featuring intelligent backend logic and intuitive user experiences.
          </motion.p>
        </div>
      </ParallaxLayer>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, index) => {
          const isHovered = hoveredProject === index;
          const parallaxSpeed = index % 2 === 0 ? -0.1 : 0.1;

          return (
            <ParallaxLayer key={index} speed={parallaxSpeed}>
              <motion.div
                className="relative h-full group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                {/* Glowing Outer Card Border Frame */}
                <div className={`relative h-full p-1 rounded-3xl bg-gradient-to-br ${project.gradient} shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]`}>
                  
                  <div className={`relative h-full rounded-[22px] ${
                    darkMode ? "bg-slate-900/95" : "bg-white"
                  } p-7 sm:p-8 flex flex-col justify-between overflow-hidden backdrop-blur-xl`}>

                    {/* Ambient Background Gradient Shift */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
                      <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl`} />
                    </div>

                    <div>
                      {/* Card Header: Icon & Duration */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-lg shadow-emerald-500/20`}
                          animate={{ rotate: isHovered ? [0, 8, -8, 0] : 0, scale: isHovered ? 1.1 : 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {project.icon}
                        </motion.div>
                        
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full text-xs font-mono font-bold text-emerald-400 border border-emerald-500/30">
                          <Clock size={12} />
                          {project.duration}
                        </span>
                      </div>

                      {/* Title & Short Description */}
                      <h3 className={`text-2xl font-extrabold mb-2 transition-colors duration-300 ${
                        isHovered ? "text-emerald-400" : darkMode ? "text-white" : "text-slate-900"
                      }`}>
                        {project.title}
                      </h3>
                      
                      <p className="text-xs font-mono text-emerald-400/90 font-semibold mb-4 uppercase tracking-wider">
                        {project.shortDesc}
                      </p>
                      
                      <p className={`text-sm leading-relaxed mb-6 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                        {project.desc}
                      </p>

                      {/* Feature Pills Grid */}
                      <div className="grid grid-cols-2 gap-2.5 mb-6">
                        {project.features.map((feature, i) => (
                          <div
                            key={i}
                            className={`p-2.5 rounded-xl border transition-all duration-300 ${
                              darkMode 
                                ? "bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-emerald-500/40" 
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:border-emerald-500/40"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Zap size={13} className="text-emerald-400 shrink-0" />
                              <span className="text-xs font-medium truncate">{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges Footer */}
                    <div className="pt-4 border-t border-slate-700/20">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={`px-3 py-1 rounded-full text-xs font-mono border ${
                              darkMode 
                                ? "bg-slate-800/80 border-slate-700 text-slate-300" 
                                : "bg-slate-100 border-slate-200 text-slate-700"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            </ParallaxLayer>
          );
        })}
      </div>

    </section>
  );
};

export default Projects;