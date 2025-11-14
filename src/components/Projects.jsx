import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaGoogle,
  FaBookOpen,
} from "react-icons/fa";
import { resume } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="container py-24 relative">
      {/* Animated Gradient Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-red-600/20 blur-[200px] top-0 left-1/3 animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[180px] bottom-0 right-1/4 animate-pulse delay-1000"></div>
      </div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-14 text-center text-white tracking-wide"
      >
        <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </span>
      </motion.h3>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {resume.projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{
              scale: 1.07,
              rotateY: 5,
              rotateX: 3,
              boxShadow: "0 0 40px rgba(224,41,47,0.6)",
            }}
            className="relative p-6 rounded-2xl bg-gradient-to-b from-[#101010] to-[#1b1b1b] border border-white/10 
                       hover:border-red-500/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] 
                       hover:shadow-[0_0_35px_rgba(224,41,47,0.4)] transform-gpu transition-all"
          >
            {/* Floating Light Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent rounded-2xl blur-2xl -z-10"></div>

            <h4 className="font-semibold text-xl text-white mb-3">{p.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 h-[100px]">
              {p.details}
            </p>

            {/* Buttons */}
            <div className="flex gap-3">
              {p.demo && (
                <motion.a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-red-400 
                             border border-red-500/50 hover:text-white hover:bg-red-600/20 transition-all"
                >
                  <FaExternalLinkAlt />
                  Demo
                </motion.a>
              )}
              {p.code && (
                <motion.a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-300 
                             border border-white/10 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FaGithub />
                  Code
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Social Links Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 flex justify-center gap-10 flex-wrap"
      >
        {[
          {
            href: "https://github.com/psharyu13",
            icon: <FaGithub className="text-3xl text-gray-300 group-hover:text-white" />,
            label: "GitHub",
            color: "red-500",
            shadow: "#e0292f66",
          },
          {
            href: "https://www.linkedin.com/in/your-linkedin/",
            icon: <FaLinkedin className="text-3xl text-blue-400 group-hover:text-white" />,
            label: "LinkedIn",
            color: "blue-500",
            shadow: "#0077b566",
          },
          {
            href: "https://scholar.google.com/citations?user=1KhS8jcAAAAJ&hl=en",
            icon: <FaGoogle className="text-3xl text-green-400 group-hover:text-white" />,
            label: "Google Scholar",
            color: "green-500",
            shadow: "#00ff8855",
          },
          {
            href: "https://www.scopus.com/home.uri",
            icon: <FaBookOpen className="text-3xl text-purple-400 group-hover:text-white" />,
            label: "Scopus Profile",
            color: "purple-500",
            shadow: "#9b5de555",
          },
        ].map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.08 }}
            className={`group flex items-center gap-3 px-8 py-3 rounded-xl bg-[#141414] border border-white/10 
                        hover:border-${link.color}/50 hover:shadow-[0_0_25px_${link.shadow}] transition-all`}
          >
            {link.icon}
            <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-all">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
