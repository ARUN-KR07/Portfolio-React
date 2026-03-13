import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills, darkMode }) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardHover = {
    scale: 1.02,
    y: -5,
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Skills</span>
      </motion.h2>
      
      <motion.p 
        className="text-center text-slate-500 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Hover over each skill to see details
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={fadeInUp}
            whileHover={cardHover}
            className={`group relative p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'
            } shadow-xl cursor-pointer overflow-hidden`}
          >
            <motion.div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${skill.color} opacity-10`}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
              </div>

              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              
              <motion.p 
                className="text-sm text-slate-400 mb-3"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {skill.description}
              </motion.p>
            </div>

            <motion.div
              className="absolute inset-0 border-2 border-emerald-500/0 rounded-2xl group-hover:border-emerald-500/50 transition-colors duration-300"
              animate={{
                boxShadow: [
                  '0 0 0 rgba(16,185,129,0)',
                  '0 0 10px rgba(16,185,129,0.3)',
                  '0 0 0 rgba(16,185,129,0)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;