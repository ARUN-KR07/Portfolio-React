import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building, MapPin } from 'lucide-react';

const Experience = ({ experience, darkMode }) => {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Experience</span>
      </motion.h2>

      <motion.div
        className={`relative p-8 md:p-10 rounded-3xl border ${
          darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
        } shadow-2xl overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-full blur-3xl" />
        </div>

        <div className="relative mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <motion.h3 
                className="text-3xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {experience.role}
              </motion.h3>
              
              <div className="flex flex-wrap items-center gap-4 text-slate-400">
                <span className="flex items-center gap-1">
                  <Building size={16} className="text-emerald-500" />
                  {experience.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={16} className="text-emerald-500" />
                  {experience.location}
                </span>
              </div>
            </div>

            <motion.div
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white font-medium shadow-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              {experience.type}
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-emerald-500" />
              Key Responsibilities
            </h4>
            <ul className="space-y-3">
              {experience.responsibilities.map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                  <span className="text-sm text-slate-400">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold mb-3 text-slate-500">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs font-mono text-emerald-500"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;