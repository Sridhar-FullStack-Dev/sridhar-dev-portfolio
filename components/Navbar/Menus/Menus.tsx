import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState, useCallback } from "react";

interface MenusProps {
  isMenusOpen: boolean;
  setIsMenusOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Menus({ isMenusOpen, setIsMenusOpen }: MenusProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [audio] = useState(new Audio("/audio/audio.mp3"));

  const playHoverSound = useCallback(() => {
    audio.volume = 0.2;
    audio.currentTime = 0;
    audio.play();
  }, [audio]);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <AnimatePresence mode="wait">
      {isMenusOpen && (
        <div className="fixed left-10 top-32 h-[80vh] backdrop-blur-sm houseMontage-font z-10">
          <div className="flex flex-col gap-8 text-8xl font-medium">
            {menuItem.map((menu, menuIndex) => (
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: 0 }}
                exit={{ x: "-120%" }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                  delay: 0.1 * menuIndex,
                }}
                key={menuIndex}
                onMouseEnter={() => handleMouseEnter(menuIndex)}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="w-fit"
              >
                <Link
                  onClick={() => setIsMenusOpen(!isMenusOpen)}
                  href={menu.href}
                >
                  <motion.span
                    animate={{
                      scale: hoveredIndex === menuIndex ? 1.1 : 1,
                      opacity: hoveredIndex === menuIndex ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {menu.name}
                  </motion.span>
                </Link>

                {hoveredIndex === menuIndex && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="h-[1px] bg-white"
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface MenuItem {
  href: string;
  name: string;
}

const menuItem: MenuItem[] = [
  {
    href: "/",
    name: "About",
  },
  {
    href: "/",
    name: "Services",
  },
  {
    href: "/",
    name: "Projects",
  },
  {
    href: "/",
    name: "Contacts",
  },
];