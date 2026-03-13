import { motion } from 'framer-motion';
import { ChevronDown, Mail,Github, Linkedin, Instagram } from 'lucide-react';

const Hero = ({ profileData }) => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/ARUN-KR07", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/arun-k-r-51867a270", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/arun_kr_07", label: "Instagram" },
    { icon: Mail, href:"https://mail.google.com/mail/?view=cm&fs=1&to=arunkrkr12@gmail.com", label: "Gmail" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <motion.div 
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name with gradient */}
        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-4"
          animate={{ textShadow: '0 0 20px rgba(16,185,129,0.3)' }}
        >
          ARUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">KR</span>
        </motion.h1>
        
        {/* Title */}
        <motion.p 
          className="text-slate-500 text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {profileData.summary}
        </motion.p>

        {/* Social Icons - Centered */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-emerald-500" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;