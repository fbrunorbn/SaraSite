import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroWEB from "../assets/HeroWEB.png";
import HeroMOB from "../assets/HeroMOB.png";
import "./Hero.css";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const backgroundImage = isMobile ? HeroMOB : HeroWEB;

  const scrollToNext = () => {
    const nextSection = document.getElementById("servicos");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      id="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">

        <motion.button
          className="scroll-btn"
          onClick={scrollToNext}

          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}

          transition={{ duration: 0.8, delay: 0.5 }}

          whileHover={{ scale: 1.15, x: "-50%" }}
          whileTap={{ scale: 0.9, x: "-50%" }}
        >
          ↓

          {/* bolinha animada com motion */}
          <motion.div
            className="dot"
            animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.button>

      </div>
    </section>
  );
}