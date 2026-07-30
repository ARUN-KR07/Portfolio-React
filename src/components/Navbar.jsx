import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon, X, Menu, Sparkles } from "lucide-react";

const Navbar = ({
  darkMode,
  setDarkMode,
  scrolled,
  activeSection,
  setIsMenuOpen,
  isMenuOpen
}) => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 transition-all duration-300 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo Container */}
        <motion.a
          href="#home"
          className={`pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full border ${
            darkMode 
              ? "bg-slate-900/80 border-slate-700/60 text-white" 
              : "bg-white/80 border-slate-200/80 text-slate-900"
          } backdrop-blur-xl shadow-lg transition-all duration-300 group`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-bold text-sm shadow-md"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            A
          </motion.div>
          <span className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            ARUN KR
          </span>
          <Sparkles size={14} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.a>

        {/* Desktop Navigation Navigation Bar */}
        <div className={`hidden md:flex pointer-events-auto items-center gap-1 p-1.5 rounded-full border ${
          darkMode 
            ? "bg-slate-900/85 border-slate-800/80 text-slate-300 shadow-2xl shadow-emerald-950/20" 
            : "bg-white/85 border-slate-200/90 text-slate-600 shadow-xl"
        } backdrop-blur-2xl`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-400 font-bold"
                    : darkMode
                    ? "hover:text-white"
                    : "hover:text-slate-900"
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active Indicator Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-full ${
                      darkMode 
                        ? "bg-emerald-500/15 border border-emerald-500/30" 
                        : "bg-emerald-500/10 border border-emerald-500/20"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Right Quick Action Group */}
        <div className="flex pointer-events-auto items-center gap-2">
          
          {/* Theme Toggle Button */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-full border ${
              darkMode 
                ? "bg-slate-900/80 border-slate-700/60 text-yellow-400 hover:border-yellow-400/40" 
                : "bg-white/80 border-slate-200/80 text-slate-700 hover:border-slate-400"
            } backdrop-blur-xl shadow-lg transition-all duration-300`}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 shadow-lg shadow-emerald-500/25 border border-emerald-400/30"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>

          {/* Mobile Hamburger Toggle */}
          <motion.button
            className={`md:hidden p-2.5 rounded-full border ${
              darkMode 
                ? "bg-slate-900/80 border-slate-700/60 text-white" 
                : "bg-white/80 border-slate-200/80 text-slate-900"
            } backdrop-blur-xl shadow-lg`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

        </div>

      </div>
    </motion.header>
  );
};

export default Navbar;