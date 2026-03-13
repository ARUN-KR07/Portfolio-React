import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = ({ education, darkMode }) => {
  return (
    <section id="education" className="py-20 px-4 md:px-6 max-w-5xl mx-auto">
      
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Education{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
          Journey
        </span>
      </motion.h2>

      <div className="relative">

        {/* Timeline line */}
        <motion.div
          className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5 }}
        />

        {education.map((edu, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col md:flex-row items-start md:items-center mb-10 ${
              edu.side === "left" ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: edu.side === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >

            {/* Timeline dot */}
            <motion.div
              className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 z-10 shadow-lg shadow-emerald-500/30"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
            />

            {/* Content */}
            <div className="w-full md:w-5/12 pl-12 md:pl-0 md:pr-8">

              <motion.div
                className={`p-5 md:p-6 rounded-2xl border ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white border-slate-200"
                } shadow-xl relative overflow-hidden group`}
                whileHover={{ scale: 1.03 }}
              >

                <GraduationCap
                  className="absolute opacity-5 right-2 top-2"
                  size={60}
                />

                <div className="relative">

                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-emerald-500">
                      {edu.degree}
                    </h3>

                    <span className="flex items-center gap-1 text-xs bg-emerald-500/10 px-3 py-1 rounded-full text-emerald-500">
                      <Calendar size={12} />
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-slate-400 font-medium mb-1">
                    {edu.school}
                  </p>

                  <p className="text-sm text-slate-500">
                    {edu.desc}
                  </p>

                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-emerald-500/0 rounded-2xl group-hover:border-emerald-500/50 transition-colors duration-300"
                />
              </motion.div>

            </div>

            {/* Empty side for desktop */}
            <div className="hidden md:block md:w-5/12" />

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;