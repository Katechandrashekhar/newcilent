import React from 'react';
import { motion } from 'framer-motion';
import { resume } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="container py-24 scroll-mt-24 flex justify-center items-center min-h-[90vh]"
    >
      <motion.div
        className="relative bg-gradient-to-b from-black/60 to-black/80 backdrop-blur-lg border border-red-700/40 
                   rounded-2xl p-12 shadow-[0_0_25px_rgba(255,0,0,0.3)] max-w-5xl w-full text-center overflow-hidden"
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        whileHover={{ scale: 1.03, rotateX: 3, rotateY: 3 }}
      >
        {/* Animated background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '200% 200%' }}
        />

        {/* Header */}
        <motion.h3
          className="relative text-5xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-red-500 via-red-400 to-red-600 mb-8 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Objective
        </motion.h3>

        {/* Developer Objective */}
        <motion.div
          className="relative mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
        >
          <h4 className="text-2xl font-semibold text-red-400 mb-3">As a Developer 💻</h4>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            {resume.objective ||
              "To build innovative, efficient, and user-centric software solutions that blend creativity with technology. I aim to continuously evolve as a full-stack developer who can transform complex ideas into seamless digital experiences while maintaining strong design and performance standards."}
          </p>
        </motion.div>

        {/* Divider Animation */}
        <motion.div
          className="relative h-1 w-32 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mb-10"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '8rem', opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        />

        {/* Researcher Objective */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <h4 className="text-2xl font-semibold text-red-400 mb-3">As a Researcher 🔬</h4>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            "Driven by curiosity and innovation, I focus on exploring cutting-edge technologies such as AI, IoT, Blockchain, and Data Analytics. My goal is to contribute to impactful research that bridges theoretical knowledge with practical real-world applications, advancing technology for a smarter future."
          </p>
        </motion.div>

        {/* Floating glow particles */}
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full blur-md"
            animate={{
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
