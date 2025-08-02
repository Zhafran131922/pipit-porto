// components/Footer.js
import React, { useEffect, useRef } from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

const Footer = () => {
  // Refs for the background elements
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  
  useEffect(() => {
    let animationFrameId;
    
    const animateBlobs = () => {
      if (!blob1Ref.current || !blob2Ref.current || !blob3Ref.current) return;
      
      const time = Date.now() * 0.0005;
      
      // Animate blob1 (blue)
      const x1 = Math.sin(time * 0.7) * 30;
      const y1 = Math.cos(time * 0.5) * 20;
      blob1Ref.current.style.transform = `translate(${x1}px, ${y1}px)`;
      
      // Animate blob2 (purple)
      const x2 = Math.sin(time * 0.8) * 40;
      const y2 = Math.cos(time * 0.6) * 30;
      blob2Ref.current.style.transform = `translate(${x2}px, ${y2}px)`;
      
      // Animate blob3 (cyan)
      const x3 = Math.sin(time * 0.9) * 50;
      const y3 = Math.cos(time * 0.7) * 40;
      blob3Ref.current.style.transform = `translate(${x3}px, ${y3}px)`;
      
      animationFrameId = requestAnimationFrame(animateBlobs);
    };
    
    // Start the animation
    animationFrameId = requestAnimationFrame(animateBlobs);
    
    // Clean up on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div 
          ref={blob1Ref}
          className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl transition-all duration-700 ease-linear"
        ></div>
        <div 
          ref={blob2Ref}
          className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500 rounded-full blur-3xl transition-all duration-700 ease-linear"
        ></div>
        <div 
          ref={blob3Ref}
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500 rounded-full blur-3xl transition-all duration-700 ease-linear"
        ></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Get in Touch section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Get in Touch
              </h2>
              <p className="mt-4 text-gray-300 max-w-md">
                Feel free to reach out for collaborations or just a friendly hello
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <FaPhone className="text-blue-400 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-400">Phone</h3>
                  <p className="mt-1 text-lg font-medium">+62 813-2800-4641</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-purple-400 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-400">Email</h3>
                  <p className="mt-1 text-lg font-medium">
                    fitrotul018@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-gray-400">
                    Location
                  </h3>
                  <p className="mt-1 text-lg font-medium">
                    Semarang, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/fitrotul-azizah/?trk=opento_nprofile_details"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>

                <a
                  href="https://www.instagram.com/fitrotul_01?utm_source=ig_web_button_share_sheet&igsh=MngxMWMwNG5qZ2Y3"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl" />
                </a>

                <a
                  href="https://www.tiktok.com/@pipitwle?is_from_webapp=1&sender_device=pc"
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 border border-gray-700"
                  aria-label="TikTok"
                >
                  <FaTiktok className="text-xl" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-8 lg:mt-0">
              <h3 className="text-xl font-semibold mb-4 mt-6">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="3"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">My Location</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-700">
              <div className="bg-gray-800 w-full h-64 flex items-center justify-center">
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63336.93184358524!2d110.3841511!3d-6.9666674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b3f509651ff%3A0xf1f2d2c174cbe8a6!2sSemarang%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1691575574626!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
              </div>
              <p className="ml-4 text-gray-300">
                Currently based in Semarang, open to remote opportunities
                worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Fitrotul Azizah. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;