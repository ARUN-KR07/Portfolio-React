import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Controls mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detects if page has been scrolled (used for navbar styling)
  const [scrolled, setScrolled] = useState(false);

  // Dark / Light mode toggle
  const [darkMode, setDarkMode] = useState(true);

  // Tracks which section is currently active (for navbar highlight)
  const [activeSection, setActiveSection] = useState('home');


  /* ================= SCROLL DETECTION ================= */

  useEffect(() => {

    const handleScroll = () => {

      // Check if page is scrolled down
      setScrolled(window.scrollY > 50);

      // Sections to track
      const sections = ['home', 'skills', 'experience', 'projects', 'education'];

      // Determine which section is currently visible
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);

        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);


  /* ================= UI RENDER ================= */

  return (

    // Main App Container
    <div
      className={`
      ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}
      transition-colors duration-500 font-sans overflow-x-hidden min-h-screen
      `}
    >

      {/* ================= SCROLL PROGRESS BAR ================= */}

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 z-50"
        style={{ scaleX: 0, transformOrigin: "0%" }}

        // Animates progress bar based on page scroll
        animate={{
          scaleX:
            window.scrollY /
            (document.body.scrollHeight - window.innerHeight)
        }}
      />


      {/* ================= NAVBAR ================= */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrolled={scrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        profileData={profileData}
      />


      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {isMenuOpen && (

          <motion.div
            className="fixed inset-0 z-30 md:hidden bg-slate-900/95 backdrop-blur-lg"

            // Animation when menu appears
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}

            // Animation when menu closes
            exit={{ opacity: 0, x: '100%' }}
          >

            {/* Mobile navigation links */}
            <div className="flex flex-col items-center justify-center h-full gap-8">

              {['Home', 'Skills', 'Experience', 'Projects', 'Education'].map((link, i) => (

                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-3xl font-bold text-white hover:text-emerald-500"

                  // Close menu after clicking link
                  onClick={() => setIsMenuOpen(false)}

                  // Link animation
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}

                  // Delay animation for each link
                  transition={{ delay: i * 0.1 }}
                >
                  {link}
                </motion.a>

              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ================= MAIN PAGE SECTIONS ================= */}

      {/* Hero / Introduction Section */}
      <Hero profileData={profileData} />

      {/* Skills Section */}
      <Skills skills={profileData.skills} darkMode={darkMode} />

      {/* Work Experience Section */}
      <Experience experience={profileData.experience} darkMode={darkMode} />

      {/* Projects Section */}
      <Projects projects={profileData.projects} darkMode={darkMode} />

      {/* Education Section */}
      <Education education={profileData.education} darkMode={darkMode} />

      {/* Contact Section */}
      <Contact profileData={profileData} darkMode={darkMode} />

      {/* Footer */}
      <Footer />


      {/* ================= CUSTOM SCROLLBAR STYLES ================= */}

      <style>{`
        html { scroll-behavior: smooth; }

        body::-webkit-scrollbar {
          width: 6px;
        }

        body::-webkit-scrollbar-track {
          background: ${darkMode ? '#0f172a' : '#f9f6f1'};
        }

        body::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 10px;
        }
      `}
      </style>

    </div>
  );
};

export default App;