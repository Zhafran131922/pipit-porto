'use client';

import { VscAccount, VscGlobe, VscSymbolColor, VscHeart } from "react-icons/vsc";
import Dock from "../ReactBits/Dock";

export default function InteractiveDock() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items = [
    {
      icon: <VscAccount size={18} />,
      label: "Introduction",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <VscGlobe size={18} />,
      label: "Experience",
      onClick: () => scrollToSection("experience"),
    },
    {
      icon: <VscSymbolColor size={18} />,
      label: "Skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      icon: <VscHeart size={18} />,
      label: "Get in touch",
      onClick: () => scrollToSection("footer"),
    },
  ];

  return (
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
      className="bg-gray-800/50 backdrop-blur-lg"
    />
  );
}
