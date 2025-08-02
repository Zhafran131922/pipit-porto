"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Economics Tutor at BBT & Genius Class",
    description:
      "Guided students in understanding economics material and preparing for the TKA Soshum exam.",
    duration: "Nov 2024 - Present",
    icon: "📘",
    color: "bg-blue-600",
  },
  {
    title: "Teaching Intern at SMKN 2 Semarang",
    description:
      "Taught accounting subjects, prepared learning modules, and assisted with student administration tasks.",
    duration: "Sep 2024 - Oct 2024",
    icon: "🏫",
    color: "bg-green-600",
  },
  {
    title: "Finance (Freelance) – Gerownies",
    description: "Recorded and managed Gerownies’ cash flow in real time.",
    duration: "Feb 2023 - Dec 2023",
    icon: "💰",
    color: "bg-yellow-500",
  },
  {
    title: "Marketing Area FE (Freelance) – Gerownies",
    description:
      "Managed the sales team and successfully increased repeat orders and sales revenue.",
    duration: "Mar 2022 - Dec 2022",
    icon: "📈",
    color: "bg-pink-500",
  },
  {
    title: "Independent Study – Export School",
    description:
      "Studied export-import topics under the guidance of 15 experts alongside 1000 active participants.",
    duration: "Feb 2024 - Jun 2024",
    icon: "🌐",
    color: "bg-indigo-500",
  },
  {
    title: "Head of Media and Information Division",
    description:
      "Led the media team and maintained the division as the most active throughout the term.",
    duration: "Jun 2022 - May 2023",
    icon: "📣",
    color: "bg-teal-500",
  },
  {
    title: "Entrepreneurship Division Staff",
    description:
      "Analyzed product sales performance and contributed to improving business strategies.",
    duration: "Feb 2023 - Dec 2023",
    icon: "🛒",
    color: "bg-orange-500",
  },
  {
    title: "Creative and Information Staff – BEM FE UNNES",
    description:
      "Created designs and documented various student organization events and activities.",
    duration: "Feb 2022 - Jan 2023",
    icon: "🖌️",
    color: "bg-red-500",
  },
  {
    title: "PKKMB UNNES – Media Division Staff",
    description:
      "Designed event materials and acted as talent for the official short movie project.",
    duration: "Jun 2023 - Aug 2023",
    icon: "🎬",
    color: "bg-cyan-600",
  },
  {
    title: "Unnes Career Expo – Photographer Volunteer",
    description:
      "Documented the entire event series through photography and videography.",
    duration: "2023",
    icon: "📷",
    color: "bg-gray-700",
  },
  {
    title: "PKKMB FE – Discipline & Security Staff",
    description:
      "Created and enforced event rules for committee members and new students.",
    duration: "2023",
    icon: "🛡️",
    color: "bg-lime-600",
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 ${exp.color} rounded-full z-10 flex items-center justify-center text-white shadow-lg`}
                >
                  {exp.icon}
                </div>
                <div className="absolute top-10 left-10 md:top-16 md:left-24 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-[70px] md:blur-[100px] animate-pulse-slow"></div>
                <div className="absolute top-1/2 right-10 md:right-24 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[70px] md:blur-[100px] animate-pulse-slow animation-delay-[2000ms]"></div>
                <div className="absolute bottom-16 left-1/3 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow animation-delay-[4000ms]"></div>
                <div className="absolute top-1/3 right-1/4 w-56 h-56 md:w-72 md:h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-[90px] md:blur-[120px] animate-pulse-slow animation-delay-[6000ms]"></div>
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
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
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
