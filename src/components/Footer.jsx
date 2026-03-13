import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 text-center border-t border-slate-800">
      <p className="text-sm text-slate-500">
        © 2026 ARUN KR • Built with <Heart className="inline text-emerald-500" size={14} /> in Kochi
      </p>
      
    </footer>
  );
};

export default Footer;