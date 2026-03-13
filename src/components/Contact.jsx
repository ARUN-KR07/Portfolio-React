import { motion } from "framer-motion";
import {  Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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
      setTimeout(() => setSuccess(false), 4000);
    })
    .catch(() => {
      setLoading(false);
      alert("Failed to send message. Please try again.");
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      
      {/* Simple Header */}
      <motion.div 
        className="text-center mb-16"
        {...fadeInUp}
      >
        <h2 className={`text-3xl md:text-6xl font-bold mb-3 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}>
          Get in touch
        </h2>
        <div className={`w-16 h-1 mx rounded-full mx-auto ${
          darkMode ? "bg-emerald-500" : "bg-emerald-500"
        }`} />
        <p className={`mt-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Have a question or want to work together?
        </p>
      </motion.div>

      <div className="grid md:grid-cols-1 gap-8">
        
       

        {/* Simple Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border outline-none transition ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                : "bg-white border-gray-200 text-gray-900 focus:border-emerald-500"
            }`}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border outline-none transition ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                : "bg-white border-gray-200 text-gray-900 focus:border-emerald-500"
            }`}
          />

          <textarea
            rows="4"
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border outline-none transition resize-none ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-white focus:border-emerald-500"
                : "bg-white border-gray-200 text-gray-900 focus:border-emerald-500"
            }`}
          />

          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
              darkMode
                ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                : "bg-emerald-600 hover:bg-emerald-700 text-white"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? "Sending..." : "Send message"}
            <Send size={16} />
          </motion.button>

          {/* Simple Success Message */}
          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-600 text-sm text-center"
            >
              ✓ Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
      
    </section>
    
  );
};

export default Contact;