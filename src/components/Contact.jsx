import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, GraduationCap } from "lucide-react";
import { resume } from "../data";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const n = e.target.name.value.trim();
    const em = e.target.email.value.trim();
    const m = e.target.message.value.trim();
    if (!n || !em) {
      setStatus("⚠️ Please fill in name and email.");
      return;
    }
    window.location.href = `mailto:${resume.email}?subject=Contact from ${encodeURIComponent(
      n
    )}&body=${encodeURIComponent(m + "\n\n" + em)}`;
    setStatus("📨 Opening email client...");
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="container py-20 scroll-mt-28">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        className="text-4xl font-bold mb-10 text-center text-red-400"
      >
        ✉️ Contact Me
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* Contact Info Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="relative bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20 shadow-xl hover:shadow-red-600/40 transition-all duration-300"
          whileHover={{ scale: 1.03, rotateY: 3 }}
        >
          <h4 className="font-semibold text-red-400 text-xl mb-4">
            Let’s Connect
          </h4>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-3">
              <Mail className="text-red-400" />{" "}
              <a
                href={`mailto:${resume.email}`}
                className="hover:text-red-400 underline"
              >
                {resume.email}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-red-400" /> {resume.phone}
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-6">
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <Github size={28} />
            </a>
            <a
              href={resume.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition"
            >
              <GraduationCap size={28} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          className="bg-gradient-to-br from-black/60 to-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col gap-5"
          whileHover={{ scale: 1.02 }}
        >
          <input
            name="name"
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            type="email"
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="6"
            className="w-full p-3 rounded-lg bg-transparent border border-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Your Message..."
          ></textarea>

          <motion.button
            type="submit"
            className="mt-2 py-3 rounded-lg font-semibold bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(224,41,47,0.7)",
            }}
          >
            Send Message 🚀
          </motion.button>
          <div className="text-sm text-gray-400 mt-2">{status}</div>
        </motion.form>
      </div>
    </section>
  );
}
