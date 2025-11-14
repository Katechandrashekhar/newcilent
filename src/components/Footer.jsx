import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="container py-8 text-center text-sm text-gray-400 bg-black/40 backdrop-blur-lg rounded-xl shadow-lg glow mx-auto mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      © {new Date().getFullYear()} <span className="text-red-500 glow">Sharyu Samadhan Naiknavare</span>  . All rights reserved.
    </motion.footer>
  );
}
