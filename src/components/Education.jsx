import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ education, darkMode }) => {
  return (
    <section id="education" className="py-20 px-6 max-w-5xl mx-auto">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Journey</span>
      </motion.h2>

      <div className="relative">
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 1.5 }}
        />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center mb-12 ${
              edu.side === 'left' ? 'flex-row' : 'flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: edu.side === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 z-10 shadow-lg shadow-emerald-500/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />

            <div className={`w-5/12 ${edu.side === 'left' ? 'pr-8 text-right' : 'pl-8'}`}>
              <motion.div 
                className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'} shadow-xl relative overflow-hidden group`}
                whileHover={{ scale: 1.05, x: edu.side === 'left' ? -5 : 5 }}
              >
                <GraduationCap className={`absolute opacity-5 ${edu.side === 'left' ? 'right-2' : 'left-2'} top-2`} size={60} />
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2 justify-between">
                    <h3 className="text-xl font-bold text-emerald-500">{edu.degree}</h3>
                    <span className="flex items-center gap-1 text-xs bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-500">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 font-medium mb-2">{edu.school}</p>
                  <p className="text-sm text-slate-500 mb-3">{edu.desc}</p>
                </div>

                <motion.div
                  className={`absolute inset-0 border-2 border-emerald-500/0 rounded-2xl group-hover:border-emerald-500/50 transition-colors duration-300`}
                />
              </motion.div>
            </div>

            <div className="w-5/12" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;