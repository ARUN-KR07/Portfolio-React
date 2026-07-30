import React, { useState, useEffect } from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = ({ darkMode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative py-12 border-t transition-colors ${
      darkMode ? "bg-slate-950 border-slate-800/80" : "bg-slate-100 border-slate-200"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Info */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            ARUN KR
          </p>
          <p className={`text-xs mt-1 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
            Full Stack Python & React Developer
          </p>
        </div>

        {/* Center Copyright */}
        <p className={`text-xs text-center flex items-center gap-1.5 ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          © 2026 ARUN KR • Built with <Heart className="inline text-emerald-500 fill-emerald-500" size={13} /> in Kochi
        </p>

        {/* Right Scroll To Top Button with Circular Progress Ring */}
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="relative group p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          
          {/* Progress Ring Overlay */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
            <path
              className="text-slate-700/20"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-emerald-400"
              strokeDasharray={`${scrollProgress}, 100`}
              strokeWidth="2.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </motion.button>

      </div>
    </footer>
  );
};

export default Footer;