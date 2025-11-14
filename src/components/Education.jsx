import React from 'react';
import { resume } from '../data';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="container py-16">
      <motion.h3
        className="text-3xl font-bold mb-10 text-center text-red-400 tracking-wide"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-10">
        {resume.education.map((ed, i) => (
          <motion.div
            key={i}
            className="bg-black/40 backdrop-blur-lg rounded-xl p-6 shadow-xl glow border border-white/10 hover:border-red-400/40 transition duration-300"
            whileHover={{ scale: 1.04, rotateX: 4, rotateY: 2 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="text-red-400" size={24} />
              <h4 className="font-semibold text-xl text-white">{ed.degree}</h4>
            </div>

            <div className="text-gray-300 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-red-400" />
                <span>{ed.inst}</span>
              </p>
              <p className="flex items-center gap-2">
                <Calendar size={16} className="text-red-400" />
                <span>{ed.year}</span>
              </p>
              <p className="flex items-center gap-2">
                <Award size={16} className="text-red-400" />
                
              </p>
            </div>

            {/* Optional Description / Highlights */}
            {ed.description && (
              <motion.div
                className="mt-4 text-sm text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {ed.description}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
