import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'skills', 'contact'];
      let current = 'home';
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = s;
            break;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl shadow-[0_0_25px_rgba(255,0,0,0.15)] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4 text-white">
        
        {/* LEFT: Animated Name */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="cursor-pointer select-none"
        >
          <h1 className="font-extrabold text-xl text-white">
            <span className="text-red-500 animate-pulse">Sharyu</span> Naiknavare
          </h1>
          <p className="text-xs text-gray-300 tracking-wide">Lecturer • Computer Science</p>
        </motion.div>

        {/* RIGHT: Navigation Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {['home', 'about', 'experience', 'projects', 'education', 'skills', 'contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              <Link
                to={item}
                smooth={true}
                duration={700}
                offset={-100}
                className={`cursor-pointer capitalize transition-all duration-300 ${
                  active === item
                    ? 'text-red-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item}
              </Link>

              {/* Animated underline */}
              <motion.span
                layoutId="underline"
                className={`absolute left-0 bottom-0 h-[2px] bg-red-500 rounded-full transition-all duration-300 ${
                  active === item ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </motion.li>
          ))}
        </ul>

        {/* Decorative Glow or Mobile Menu Placeholder */}
        <div className="hidden md:block">
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.7)]"
          ></motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
