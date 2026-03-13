import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";

const Navbar = ({
  darkMode,
  setDarkMode,
  scrolled,
  activeSection,
  setIsMenuOpen,
  isMenuOpen
}) => {

  const navLinks = [
    "Home",
    "Skills",
    "Experience",
    "Projects",
    "Education",
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl border-b border-emerald-500/20 shadow-lg"
          : "py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        backgroundColor: darkMode
          ? "rgba(15,23,42,0.85)"
          : "rgba(255,255,255,0.85)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            A
          </motion.div>

          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            ARUN.KR
          </span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">

        {navLinks.map((link) => (
            <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`relative px-3 py-1 rounded-2xl text-sm font-medium transition-all ${
                activeSection === link.toLowerCase()
                    ? "text-black bg-emerald-200/60"
                    : darkMode
                    ? "text-slate-300 hover:text-white hover:bg-slate-700/40"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                {link}
            </motion.a>
        ))}

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border ${
              darkMode
                ? "bg-slate-800 border-slate-700 text-yellow-400"
                : "bg-slate-200 border-slate-300 text-slate-700"
            }`}
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(16,185,129,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>
    </motion.nav>
  );
};

export default Navbar;