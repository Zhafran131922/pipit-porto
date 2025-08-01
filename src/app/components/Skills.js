// components/Skill.js
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Data hard skills dengan level penguasaan
  const hardSkills = [
    { name: "JavaScript", level: 90, icon: "💻" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 80, icon: "🟢" },
    { name: "UI/UX Design", level: 75, icon: "🎨" },
    { name: "Tailwind CSS", level: 95, icon: "🌀" },
    { name: "Next.js", level: 88, icon: "⏭️" },
    { name: "TypeScript", level: 82, icon: "📝" },
    { name: "GraphQL", level: 70, icon: "📊" },
  ];

  // Data soft skills
  const softSkills = [
    { name: "Komunikasi", level: "Expert" },
    { name: "Kerja Tim", level: "Advanced" },
    { name: "Manajemen Waktu", level: "Expert" },
    { name: "Pemecahan Masalah", level: "Advanced" },
    { name: "Adaptabilitas", level: "Expert" },
    { name: "Kepemimpinan", level: "Intermediate" },
    { name: "Kreativitas", level: "Advanced" },
    { name: "Manajemen Proyek", level: "Intermediate" },
  ];

  const tools = [
    { name: "MS Word", img: "/assets/skills/word.png" },
    { name: "MS Excel", img: "/assets/skills/excel.png" },
    { name: "CorelDRAW", img: "/assets/skills/corel.png" },
    { name: "Photoshop", img: "/assets/skills/photoshop.png" },
    { name: "Canva", img: "/assets/skills/canva.png" },
  ];

  // Variasi animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-4 bg-transparent relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Kombinasi keterampilan teknis dan interpersonal yang saya kembangkan
            selama bertahun-tahun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hard Skills Section */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-2xl">
                💻
              </div>
              <h3 className="text-2xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Hard Skills
              </h3>
            </div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center text-xl mr-4">
                    {skill.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: 0.3 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Soft Skills Section */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView && { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="text-2xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Soft Skills
              </h3>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-xl ${
                    skill.level === "Expert"
                      ? "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20"
                      : skill.level === "Advanced"
                      ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20"
                      : "bg-gradient-to-br from-gray-800 to-gray-900/50 border border-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        skill.level === "Expert"
                          ? "bg-purple-500/20 text-purple-300"
                          : skill.level === "Advanced"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-1 rounded-full mr-1 ${
                          (skill.level === "Expert" && i < 5) ||
                          (skill.level === "Advanced" && i < 4) ||
                          (skill.level === "Intermediate" && i < 3)
                            ? skill.level === "Expert"
                              ? "bg-purple-500"
                              : skill.level === "Advanced"
                              ? "bg-blue-500"
                              : "bg-gray-500"
                            : "bg-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Additional info section */}
        <motion.div
          className="mt-16 bg-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-white">
            Tools & Interest
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={tool.img}
                  alt={tool.name}
                  width={60}
                  height={60}
                  className="mb-2 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-blue-400/40"
                />

                <p className="text-white text-sm">{tool.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
