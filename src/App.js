import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// Importing all page components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Importing portfolio data
import { profileData } from './data/profileData';

const App = () => {

  /* ================= STATE MANAGEMENT ================= */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  /* ================= SCROLL PROGRESS TRACKING ================= */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  /* ================= SCROLL SPY DETECTION ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 250) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ================= UI RENDER ================= */
  return (
    <div
      className={`
        ${darkMode ? 'bg-slate-950 text-white bg-grid-pattern' : 'bg-slate-50 text-slate-900 bg-grid-pattern-light'}
        transition-colors duration-500 font-sans overflow-x-hidden min-h-screen relative selection:bg-emerald-500 selection:text-white
      `}
    >
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 z-50 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Floating Ambient Mesh Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 ${
          darkMode ? 'bg-emerald-600/30' : 'bg-emerald-300/30'
        }`} />
        <div className={`absolute top-1/2 right-10 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 ${
          darkMode ? 'bg-teal-600/30' : 'bg-teal-300/30'
        }`} />
      </div>

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrolled={scrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        profileData={profileData}
      />

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-2xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {['Home', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-2xl font-extrabold tracking-wide text-white hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero profileData={profileData} darkMode={darkMode} />
        <Skills skills={profileData.skills} darkMode={darkMode} />
        <Experience experience={profileData.experience} darkMode={darkMode} />
        <Projects projects={profileData.projects} darkMode={darkMode} />
        <Education education={profileData.education} darkMode={darkMode} />
        <Contact profileData={profileData} darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer darkMode={darkMode} />

      {/* Custom Scrollbar Styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        body::-webkit-scrollbar {
          width: 8px;
        }
        body::-webkit-scrollbar-track {
          background: ${darkMode ? '#020617' : '#f8fafc'};
        }
        body::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 9999px;
        }
        body::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </div>
  );
};

export default App;