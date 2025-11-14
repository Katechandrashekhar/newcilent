import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Lecturer",
      org: "D.Y. Patil Arts, Commerce & Science College, Pimpri, Pune",
      from: "Sept 2022",
      to: "June 2025",
      details:
        "Taught DBMS, Web Technology, PHP, Operating System, C, C++, Python, R Programming, Soft Computing, MATLAB, Data Mining, Data Warehousing, and Data Analysis.",
    },
    {
      title: "Lecturer",
      org: "V.P.S College of Arts, Commerce & Science, Lonavala",
      from: "Aug 2017",
      to: "Aug 2022",
      details:
        "Handled DBMS, Web Technology, Computer Graphics, PHP, ERP, Blockchain, Operating System, C, Python, and OOP Software Engineering.",
    },
    {
      title: "Lecturer",
      org: "D.Y. Patil Arts, Commerce & Science College, Pimpri, Pune",
      from: "Aug 2016",
      to: "2017",
      details: "Taught Database Management System and Action Script.",
    },
    {
      title: "Graphic Designer",
      org: "MIC INDIA, Pune",
      from: "Oct 2015",
      to: "July 2016",
      details:
        "Created web graphics, posters, and updated electronic product information on websites. Worked on 'Jeevan Spa System' web application for admin flow management.",
    },
    {
      title: "Faculty",
      org: "Disha Institute, Shivajinagar, Pune",
      from: "2011 – 2013, 2014 – 2015",
      to: "",
      details:
        "Taught HTML, C, C++, PHP, and Java for academic and job-training students.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { delay: i * 0.25, duration: 0.8, type: "spring" },
    }),
  };

  return (
    <section id="experience" className="relative container mx-auto py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-[550px] h-[550px] bg-red-500/30 rounded-full blur-3xl top-10 left-20"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute w-[480px] h-[480px] bg-purple-600/30 rounded-full blur-3xl bottom-10 right-20"
        />
      </div>

      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-white tracking-wide"
      >
        Professional Experience
      </motion.h3>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              rotateY: 8,
              boxShadow: "0 0 35px rgba(224,41,47,0.5)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
            className="relative bg-gradient-to-br from-[#111] to-[#1b1b1b]
                       border border-white/10 backdrop-blur-xl rounded-2xl p-8 
                       shadow-xl group overflow-hidden"
          >

            {/* Floating Icon */}
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="absolute -top-6 -left-6 bg-red-600/40 p-3 rounded-xl shadow-lg group-hover:shadow-red-600/40 transition"
            >
              <Briefcase size={28} className="text-red-400" />
            </motion.div>

            {/* Header */}
            <div className="flex justify-between mb-4">
              <div>
                <h4 className="font-semibold text-2xl text-red-400">{exp.title}</h4>
                <p className="text-sm text-gray-400">{exp.org}</p>
              </div>
              <p className="text-sm text-gray-400 italic">
                {exp.from} {exp.to && `– ${exp.to}`}
              </p>
            </div>

            {/* Details */}
            <p className="text-gray-300 leading-relaxed">{exp.details}</p>

            {/* Glow Line */}
            <motion.div
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-full h-[3px] 
                         bg-gradient-to-r from-red-500 via-purple-500 to-transparent 
                         bg-[length:200%_100%] opacity-70 rounded-full"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
