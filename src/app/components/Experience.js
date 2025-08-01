"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    description: "Membangun UI responsif menggunakan React dan Tailwind CSS.",
    duration: "Jan 2023 - Mei 2024",
    icon: "💻",
    color: "bg-blue-500",
  },
  {
    title: "UI/UX Designer",
    description: "Merancang alur pengguna dan wireframe aplikasi mobile.",
    duration: "Agu 2022 - Des 2022",
    icon: "🎨",
    color: "bg-purple-500",
  },
  {
    title: "Intern Web Developer",
    description: "Membantu membangun website company profile dengan Next.js.",
    duration: "Jan 2022 - Jul 2022",
    icon: "🚀",
    color: "bg-pink-500",
  },
  {
    title: "Freelance Developer",
    description: "Membuat solusi e-commerce untuk klien kecil dan menengah.",
    duration: "Mar 2021 - Des 2021",
    icon: "💼",
    color: "bg-green-500",
  },
  {
    title: "Coding Mentor",
    description: "Mengajar dasar-dasar pemrograman web untuk pemula.",
    duration: "Sep 2020 - Feb 2021",
    icon: "👨‍🏫",
    color: "bg-yellow-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experienced() {
  return (
    <section className="py-16 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Experience Timeline
          </span>
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500"></div>

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
                variants={
                  index % 2 === 0 ? itemVariantsLeft : itemVariantsRight
                }
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 ${exp.color} rounded-full z-10 flex items-center justify-center text-white shadow-lg`}
                >
                  {exp.icon}
                </div>
                <div className="absolute top-10 left-10 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[70px] md:blur-[100px] animate-pulse-slow animation-delay-2000"></div>

                <div className="absolute top-1/4 right-10 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow animation-delay-4000"></div>

                <div className="absolute bottom-10 right-10 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[90px] md:blur-[120px] animate-pulse-slow animation-delay-[6000ms]"></div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 p-6 rounded-xl shadow-xl backdrop-blur-sm ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-blue-50 to-white ml-0 md:mr-auto"
                      : "bg-gradient-to-r from-white to-blue-50 mr-0 md:ml-auto"
                  } border border-gray-200`}
                >
                  <div className="flex items-start">
                    <div
                      className={`${exp.color} w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl mr-4`}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-medium text-gray-500">
                        {exp.duration}
                      </span>
                      <p className="mt-3 text-gray-600">{exp.description}</p>
                    </div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${exp.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(index + 1) * 20}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
}
