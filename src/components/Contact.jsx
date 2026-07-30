import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle2, MessageSquare, User, AtSign, Sparkles } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ParallaxLayer from './ParallaxLayer';

const Contact = ({ profileData, darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_w74n82h",
      "template_npe38tk",
      formData,
      "wwyNdI1aMhERzy1J3"
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    })
    .catch(() => {
      setLoading(false);
      alert("Failed to send message. Please try again or send an email directly!");
    });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto relative">
      
      {/* Background Parallax Orbs */}
      <ParallaxLayer speed={-0.3} className="absolute right-0 top-1/4 w-96 h-96 pointer-events-none opacity-20 z-0">
        <div className="w-full h-full bg-emerald-500 rounded-full blur-3xl" />
      </ParallaxLayer>

      <ParallaxLayer speed={0.2} className="absolute left-0 bottom-10 w-80 h-80 pointer-events-none opacity-15 z-0">
        <div className="w-full h-full bg-teal-500 rounded-full blur-3xl" />
      </ParallaxLayer>

      {/* Section Header */}
      <ParallaxLayer speed={-0.1}>
        <div className="text-center mb-16 relative z-10">
          <motion.div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MessageSquare size={14} />
            Let's Collaborate
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">Touch</span>
          </motion.h2>

          <motion.p 
            className={`max-w-md mx-auto text-base ${darkMode ? "text-slate-400" : "text-slate-600"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project idea, opportunity, or inquiry? Send a message and let's start a conversation.
          </motion.p>
        </div>
      </ParallaxLayer>

      {/* Contact Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Side: Direct Contact Details Cards */}
        <div className="lg:col-span-5 space-y-4">
          <ParallaxLayer speed={-0.05}>
            <motion.div
              className={`p-6 rounded-3xl border transition-all duration-300 ${
                darkMode 
                  ? "bg-slate-900/80 border-slate-800/80 hover:border-emerald-500/40 shadow-xl" 
                  : "bg-white/90 border-slate-200 hover:border-emerald-500/40 shadow-lg"
              } backdrop-blur-xl group flex items-center gap-4`}
              whileHover={{ y: -3 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                <a 
                  href={`mailto:${profileData.email}`} 
                  className={`text-sm font-bold hover:text-emerald-400 transition-colors ${darkMode ? "text-white" : "text-slate-900"}`}
                >
                  {profileData.email}
                </a>
              </div>
            </motion.div>
          </ParallaxLayer>

          <ParallaxLayer speed={0.05}>
            <motion.div
              className={`p-6 rounded-3xl border transition-all duration-300 ${
                darkMode 
                  ? "bg-slate-900/80 border-slate-800/80 hover:border-emerald-500/40 shadow-xl" 
                  : "bg-white/90 border-slate-200 hover:border-emerald-500/40 shadow-lg"
              } backdrop-blur-xl group flex items-center gap-4`}
              whileHover={{ y: -3 }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-400 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Location</p>
                <p className={`text-sm font-bold ${darkMode ? "text-white" : "text-slate-900"}`}>
                  {profileData.location}
                </p>
              </div>
            </motion.div>
          </ParallaxLayer>

          {/* Quick status card */}
          <ParallaxLayer speed={0.1}>
            <div className={`p-6 rounded-3xl border ${
              darkMode ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-800"
            } backdrop-blur-xl`}>
              <div className="flex items-center gap-2 mb-2 font-bold text-sm">
                <Sparkles size={16} />
                Open for Opportunities
              </div>
              <p className="text-xs leading-relaxed opacity-90">
                Currently exploring Full Stack Developer roles, Python backend engineering, and exciting web software projects.
              </p>
            </div>
          </ParallaxLayer>
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-7">
          <ParallaxLayer speed={-0.08}>
            <motion.form
              onSubmit={handleSubmit}
              className={`p-8 sm:p-10 rounded-3xl border ${
                darkMode 
                  ? "bg-slate-900/90 border-slate-800/90 shadow-2xl" 
                  : "bg-white/95 border-slate-200 shadow-xl"
              } backdrop-blur-2xl space-y-5`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Name Input */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-800/60 border-slate-700/80 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                        : "bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    }`}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <AtSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm outline-none transition-all duration-300 ${
                      darkMode
                        ? "bg-slate-800/60 border-slate-700/80 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                        : "bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                    }`}
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Hi Arun, I'd like to talk about..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full p-4 rounded-2xl border text-sm outline-none transition-all duration-300 resize-none ${
                    darkMode
                      ? "bg-slate-800/60 border-slate-700/80 text-white focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
                      : "bg-slate-50 border-slate-200 text-slate-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                  }`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 shadow-lg shadow-emerald-500/25 border border-emerald-400/30 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(16,185,129,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>

              {/* Success Notification */}
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-xs font-semibold text-center flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully! I will respond shortly.
                </motion.div>
              )}
            </motion.form>
          </ParallaxLayer>
        </div>

      </div>
    </section>
  );
};

export default Contact;