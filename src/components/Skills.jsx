import React from "react";
import { resume } from "../data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative container py-24 scroll-mt-32"
    >
      {/* Animated Glow Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-red-600/20 blur-[200px] top-10 left-1/3 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[180px] bottom-0 right-1/4 animate-pulse delay-1000"></div>
      </div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold mb-16 text-center text-white tracking-wide"
      >
        <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </span>
      </motion.h3>

      {/* Skills Categories */}
      <div className="grid grid-cols-3 gap-10">
        {resume.skillsCategories?.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.06,
              rotateY: 4,
              rotateX: 2,
              boxShadow: "0 0 40px rgba(224,41,47,0.4)",
            }}
            transition={{ duration: 0.6 }}
            className="relative p-8 rounded-2xl bg-gradient-to-b from-[#101010] to-[#1b1b1b] 
                       border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] 
                       hover:shadow-[0_0_30px_rgba(224,41,47,0.3)] transform-gpu"
          >
            {/* Glowing Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent rounded-2xl blur-2xl -z-10"></div>

            <h4 className="text-2xl font-semibold text-red-400 mb-6 tracking-wide">
              {category.name}
            </h4>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((s, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 150 }}
                  className="px-4 py-2 rounded-full bg-white/5 text-gray-200 border border-white/10 
                             hover:border-red-500/50 hover:text-white hover:bg-red-600/20 
                             shadow-inner backdrop-blur-sm text-sm select-none transition-all"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Fallback if no categories exist */}
        {!resume.skillsCategories && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(224,41,47,0.4)",
            }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#101010] to-[#1b1b1b] rounded-2xl p-8 
                       shadow-xl border border-white/10 col-span-3 text-center"
          >
            <h4 className="text-xl text-red-400 mb-4 font-semibold">
              Skills
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {resume.skills.map((s, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 rounded-full bg-red-600/70 text-white glow text-sm select-none"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
