// components/Home.js
"use client";

import ProfileCard from "../ReactBits/ProfileCard";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useRef } from "react";
export default function Home() {
  // Tambahkan ref dan hook scroll
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Percepat animasi dengan mengalikan nilai scroll (4x lebih cepat)
  const yFast = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section
      ref={ref} // Attach ref ke section
      className="min-h-screen bg-transparent text-white flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 z-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]" />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content with animations */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y: yMedium }}
        >
          <motion.h2
            className="text-lg text-pink-400 mb-2 font-mono tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typewriter
              words={[
                "Hello There",
                "Assalamualaikum",
                "Bonjour",
                "こんにちは",
                "Halo Ges",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I am{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              Fitrotul Azizah
            </span>
          </motion.h1>

          <motion.div
            className="flex items-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-sm text-gray-300 bg-gray-800/50 px-3 py-1 rounded-full mr-3 border border-gray-700">
              Accounting Enthusiast
            </span>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
          </motion.div>

          <motion.p
            className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base max-w-xl backdrop-blur-sm bg-gray-900/30 p-4 rounded-xl border border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I&apos;m a fresh graduate from Universitas Negeri Semarang, Faculty of
            Economics and Business, majoring in Accounting Education. During my
            studies, I gained a strong understanding of financial principles,
            accounting systems, and educational methodologies. I was actively
            involved in both academic and organizational activities, which
            helped me develop soft skills such as communication, teamwork, and
            problem-solving.
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-pink-500/20 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="transition-transform group-hover:translate-y-0.5" />
              Download CV
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content (ProfileCard) with animations */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: yMedium }}
          className="flex justify-center"
        >
          <ProfileCard
            name="Fitrotul Azizah"
            title="Accountant & Teacher"
            handle="fitrotul01"
            avatarUrl="/assets/pipit.png"
            grainUrl="/assets/ppt.png"
            showUserInfo={false}
            behindGradient={false}
            showBehindGradient={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log("Contact clicked")}
            className="transform transition-transform hover:-translate-y-1 duration-300"
          />
        </motion.div>
      </div>

      {/* Social Media Icons with animations */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 backdrop-blur-sm bg-gray-900/50 px-6 py-3 rounded-full border border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-sm text-gray-400 mr-2 hidden sm:block">Find Me On</span>
        <div className="flex space-x-4">
          {[
            { icon: <FaGithub />, color: "hover:text-purple-400" },
            { icon: <FaLinkedinIn />, color: "hover:text-blue-400" },
            { icon: <FaInstagram />, color: "hover:text-pink-400" },
            { icon: <FaTwitter />, color: "hover:text-cyan-400" }
          ].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className={`text-gray-400 text-xl transition-colors duration-300 ${item.color}`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div> */}

      {/* Scroll indicator */}
      {/* <motion.div 
        className="absolute bottom-4  left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-gray-500 mb-2">Scroll Down</span>
        <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-transparent rounded-full animate-bounce"></div>
      </motion.div> */}
    </section>
  );
}
