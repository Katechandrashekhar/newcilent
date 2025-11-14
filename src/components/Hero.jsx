import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, GraduationCap } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { resume } from "../data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative container mx-auto grid md:grid-cols-2 gap-16 items-center py-28 overflow-hidden"
    >
      {/* ===== Background Gradient Glow ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-[700px] h-[700px] bg-red-600/25 blur-[220px] top-0 left-1/4"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-600/20 blur-[200px] bottom-0 right-1/4"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* ===== Left Text Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Hi, I'm{" "}
          <span className="text-red-500 drop-shadow-[0_0_10px_#e0292f]">
            {resume.name.split(" ")[0]}
          </span>
          <br />
          <span className="text-gray-300">a Researcher & Developer</span>
        </motion.h1>

        <motion.h2
          className="mt-3 text-2xl font-medium text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Typewriter
            words={[
              "Innovating with Technology ⚙️",
              "Exploring Research Frontiers 🔬",
              "Building Scalable Systems 💻",
              "Empowering Ideas with Code 🚀",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
          {resume.title} based in {resume.location}. Passionate about merging
          development with research to craft intelligent, efficient, and
          innovative digital solutions.
        </p>

        {/* ===== Buttons ===== */}
        <div className="mt-8 flex gap-5">
          <motion.a
            href="/sharyu_resume.doc"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 via-red-500 to-red-400 
                       text-white font-semibold shadow-lg hover:shadow-red-500/50 
                       transition-all duration-500"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-red-500/50 text-red-400 
                       hover:bg-red-500/10 transition-all duration-500 font-medium"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
          >
            Contact Me
          </motion.a>
        </div>

        {/* ===== Social Icons ===== */}
        <motion.div
          className="mt-8 flex gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-red-400 hover:shadow-red-400/30 shadow-lg backdrop-blur-md"
          >
            <Linkedin size={24} />
          </motion.a>

          <motion.a
            href="https://github.com/psharyu13"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-red-400 hover:shadow-red-400/30 shadow-lg backdrop-blur-md"
          >
            <Github size={24} />
          </motion.a>

          <motion.a
            href="https://scholar.google.com/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="p-3 bg-white/10 rounded-full text-gray-300 hover:text-red-400 hover:shadow-red-400/30 shadow-lg backdrop-blur-md"
          >
            <GraduationCap size={24} />
          </motion.a>
        </motion.div>

        {/* ===== Skills Tags ===== */}
        <div className="mt-10 flex gap-3 flex-wrap text-sm">
          {["Java", "Python", "SQL", "IoT", "React", "Machine Learning"].map(
            (skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.15 }}
                className="px-4 py-2 rounded-full bg-white/10 text-gray-300 border border-white/10 
                           shadow-inner backdrop-blur-sm hover:shadow-red-500/40 hover:text-red-400 
                           transition-all duration-300"
              >
                {skill}
              </motion.span>
            )
          )}
        </div>
      </motion.div>

      {/* ===== Profile Photo (Enhanced 3D Hover) ===== */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        whileHover={{
          scale: 1.05,
          rotateY: 8,
          boxShadow: "0 0 50px rgba(224,41,47,0.6)",
        }}
        className="flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-80 h-80 rounded-3xl overflow-hidden border border-white/10 
                        shadow-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1b1b1b] p-[2px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent animate-pulse rounded-3xl"></div>

          {/* ⭐ FIXED PROFILE IMAGE PATH ⭐ */}
          <img
            src="profile.png"
            alt="profile"
             className="w-full h-full object-cover rounded-3xl hover:scale-110 transition-transform duration-700"
/>

          />
        </motion.div>
      </motion.div>
    </section>
  );
}
