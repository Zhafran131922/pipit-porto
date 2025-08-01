'use client';

import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
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
      icon: <VscHome size={18} />,
      label: "Introduction",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Experience",
      onClick: () => scrollToSection("experience"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "Skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      icon: <VscSettingsGear size={18} />,
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
    />
  );
}
