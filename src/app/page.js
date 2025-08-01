"use client";

import { useState, useEffect } from "react";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import InteractiveDock from "./components/InteractiveDock";

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [scaleValue, setScaleValue] = useState(1.05);
  const [translateY, setTranslateY] = useState(0);
  const [activeTab, setActiveTab] = useState("education");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount
    setIsMobile(window.innerWidth < 768);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollY(position);

      // More subtle scaling effect
      const newScale = Math.min(1.08, 1.05 + position * 0.00008);
      const newTranslateY = position * 0.25;

      setScaleValue(newScale);
      setTranslateY(newTranslateY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 right-10 md:right-20 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-[70px] md:blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[70px] md:blur-[100px] animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow animation-delay-4000"></div>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CiAgPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYwMyIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+')] opacity-10"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div
            style={{
              transform: `translateY(${-translateY * 0.3}px)`,
              opacity: Math.max(0, 1 - scrollY * 0.002),
              transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
            }}
          >
            <div id="home">
              <Home />
            </div>
          </div>

          <div
            className={`relative ${
              isMobile ? "-mt-16" : "-mt-32"
            } flex justify-center px-4`}
          >
            {/* Enhanced Glassmorphism Box */}
            <div
              className="w-full max-w-2xl md:max-w-4xl bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/25 shadow-2xl overflow-hidden"
              style={{
                transform: `translateY(-${translateY}px) scale(${scaleValue})`,
                transition: "transform 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)",
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Modern Tab Navigation */}
<div className="w-full bg-white/5 border-b border-white/10">
  <div className="flex w-full justify-evenly">
    {/* Study Button */}
    <button
      className={`flex-1 flex items-center justify-center py-4 px-2 md:px-6 transition-all duration-300 group
        ${
          activeTab === "education"
            ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      onClick={() => setActiveTab("education")}
    >
      <span className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6 mr-2 text-blue-400 group-hover:text-blue-300 transition-colors"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
        <span className="text-lg md:text-xl font-medium">Study</span>
      </span>
    </button>

    {/* Thesis Button */}
    <button
      className={`flex-1 flex items-center justify-center py-4 px-2 md:px-6 transition-all duration-300 group
        ${
          activeTab === "experience"
            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white"
            : "text-white/70 hover:text-white hover:bg-white/10"
        }`}
      onClick={() => setActiveTab("experience")}
    >
      <span className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6 mr-2 text-purple-400 group-hover:text-purple-300 transition-colors"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <span className="text-lg md:text-xl font-medium">Thesis</span>
      </span>
    </button>
  </div>
</div>


              {/* Tab Content */}
              <div className="p-4 md:p-6 lg:p-8">
                {activeTab === "education" ? (
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/30 p-3 rounded-xl mr-0 md:mr-4 mb-4 md:mb-0 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-blue-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          Universitas Negeri Semarang
                        </h3>
                        <p className="text-blue-300 text-base md:text-lg">
                          Bachelor of Accountancy
                        </p>

                        <div className="flex flex-col md:flex-row items-start md:items-center mt-4">
                          <div className="w-full md:w-40 bg-gray-700 rounded-full h-2.5 md:h-3">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 md:h-3 rounded-full"
                              style={{ width: "89.5%" }}
                            ></div>
                          </div>
                          <span className="mt-2 md:mt-0 md:ml-4 text-base md:text-lg font-bold text-white">
                            GPA: 3.65 / 4.0
                          </span>
                        </div>

                        <p className="mt-3 text-white/80 text-base md:text-lg">
                          2018 - 2022
                        </p>

                        <div className="mt-6">
                          <h4 className="font-bold text-lg md:text-xl text-white mb-3">
                            Relevant Coursework
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                            {[
                              "Financial Accounting",
                              "Managerial Accounting",
                              "Taxation",
                              "Auditing",
                              "Corporate Finance",
                              "Accounting Information Systems",
                              "Business Ethics",
                              "International Accounting",
                            ].map((course, index) => (
                              <div
                                key={index}
                                className="flex items-center bg-blue-900/30 px-3 py-2 rounded-lg border border-blue-800/50 transition-all hover:bg-blue-900/40 hover:border-blue-700/50"
                              >
                                <span className="text-blue-400 mr-2">•</span>
                                <span className="text-sm md:text-base">
                                  {course}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex flex-col md:flex-row items-start">
                      <div className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 p-3 rounded-xl mr-0 md:mr-4 mb-4 md:mb-0 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-purple-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                          Undergraduate Thesis
                        </h3>
                        <p className="text-purple-300 text-base md:text-lg">
                          Universitas Negeri Semarang – Faculty of Economics and
                          Business
                        </p>
                        <p className="mt-2 text-white/80 text-base md:text-lg">
                          Jul 2024 – Present
                        </p>
                        <div className="mt-4">
                          <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
                            Thesis Title:
                          </h4>
                          <p className="text-white/90 text-base md:text-lg italic">
                            &quot;The Influence of Accounting Teachers&apos; Welfare on
                            Teaching Performance: The Moderating Role of Work
                            Motivation&quot;
                          </p>
                        </div>

                        <ul className="mt-5 space-y-2 md:space-y-3">
                          {[
                            "Examines the correlation between teachers' economic well-being and their performance in delivering accounting education.",
                            "Introduces work motivation as a moderating variable to analyze its impact on the primary relationship.",
                            "Utilizes a quantitative research approach with statistical tools such as SEM-PLS for hypothesis testing.",
                            "Provides recommendations for educational institutions to improve teacher satisfaction and student outcomes.",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-purple-400 mt-1.5 mr-3">
                                ▹
                              </span>
                              <span className="text-sm md:text-base text-white/90">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div id="experience">
          <Experience />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="footer">
          <Footer />
        </div>
        {/* Fixed dock at the bottom */}
        <div className="fixed bottom-0 left-0 w-full z-50">
          <InteractiveDock />
        </div>
      </section>
    </>
  );
}
