// pages/404.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft, FaRocket } from "react-icons/fa";
import InteractiveDock from "./ReactBits/Dock";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-4000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center opacity-20" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full bg-pink-500/20 backdrop-blur-sm border border-pink-500/30"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-6 h-6 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1 className="text-[180px] md:text-[240px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text leading-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lost in Space</h2>
          <p className="text-gray-300 max-w-md mx-auto text-lg">
            Oops! The page you&apos;re looking for has been lost in the digital cosmos.
            Don&apos;t worry, we can help you navigate back home.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-pink-500/20"
            >
              <FaHome />
              Return Home
            </motion.div>
          </Link>
          
          <Link href="#" onClick={() => window.history.back()}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-700 hover:border-pink-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:text-pink-400 backdrop-blur-sm bg-gray-900/30"
            >
              <FaArrowLeft />
              Go Back
            </motion.div>
          </Link>
        </motion.div>

        {/* Search */}
        

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>Still lost? Contact support at fitrotul@gmail.com</p>
        </motion.div>
      </div>

      {/* Astronaut illustration */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-0 right-0 md:right-10 w-48 md:w-64 opacity-80"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8A3FFC" d="M45.8,-63.4C59.4,-53.3,70.1,-37.9,74.4,-20.5C78.7,-3.1,76.7,16.3,69.3,33.1C61.9,49.9,49.2,64.2,33.5,71.6C17.8,79,-0.9,79.5,-18.3,75.1C-35.7,70.7,-51.8,61.5,-61.5,47.4C-71.1,33.4,-74.3,14.7,-74.4,-4.3C-74.5,-23.3,-71.5,-42.4,-62.4,-53.4C-53.3,-64.4,-38.1,-67.4,-21.7,-75.4C-5.3,-83.4,12.3,-96.5,29.9,-94.7C47.5,-92.9,65,-76.2,73.8,-57.4C82.6,-38.6,82.7,-17.8,80.8,2.3C78.8,22.4,74.7,42.8,65.1,58.4C55.5,74,40.5,84.9,24.5,89.1C8.6,93.3,-8.3,90.9,-23.6,85.1C-38.9,79.3,-52.5,70.1,-61.6,57.5C-70.7,44.9,-75.3,28.9,-78.4,11.7C-81.6,-5.5,-83.4,-23.9,-78.1,-38.3C-72.8,-52.7,-60.4,-63.2,-46.3,-73.1C-32.2,-83,-16.1,-92.3,1.1,-94.1C18.3,-95.8,36.6,-90.1,45.8,-63.4Z" transform="translate(100 100)" />
          <circle cx="100" cy="85" r="15" fill="#FFFFFF" />
          <circle cx="90" cy="80" r="5" fill="#000000" />
          <circle cx="110" cy="80" r="5" fill="#000000" />
          <rect x="85" y="95" width="30" height="5" rx="2.5" fill="#FFFFFF" />
        </svg>
      </motion.div>
    </div>
  );
}