import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Projects = ({ projects, darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Projects</span>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative p-1 rounded-3xl bg-gradient-to-r ${project.gradient} shadow-2xl`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onHoverStart={() => setHoveredProject(index)}
            onHoverEnd={() => setHoveredProject(null)}
          >
            <div className={`relative h-full rounded-3xl ${
              darkMode ? 'bg-slate-900' : 'bg-white'
            } p-6 overflow-hidden`}>
              
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  scale: hoveredProject === index ? 1.2 : 1,
                  rotate: hoveredProject === index ? 2 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${project.color}-500 to-transparent rounded-bl-full`} />
              </motion.div>

              <div className="relative mb-6">
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-xl`}
                    animate={{
                      rotate: hoveredProject === index ? [0, 10, -10, 0] : 0,
                      scale: hoveredProject === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="flex gap-2"
                    animate={{ x: hoveredProject === index ? -5 : 0 }}
                  >
                    <span className="px-3 py-1 bg-emerald-500/10 rounded-full text-xs font-mono text-emerald-500 border border-emerald-500/30">
                      {project.duration}
                    </span>
                  </motion.div>
                </div>

                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-2"
                  animate={{ color: hoveredProject === index ? '#10b981' : '' }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-slate-500 text-sm mb-4">{project.shortDesc}</p>
                
                <p className="text-slate-400 mb-6">{project.desc}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className={`p-2 rounded-xl border ${
                      darkMode ? 'border-slate-700' : 'border-slate-200'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(16,185,129,0.1)' }}
                  >
                    <div className="flex items-center gap-2">
                      <Zap size={14} className="text-emerald-500" />
                      <span className="text-xs">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-slate-800/50 rounded-full text-xs font-mono border border-slate-700"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;