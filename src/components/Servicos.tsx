import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Servicos.css";

import NailArt from "../assets/NailArt.png";
import Sobrancelha from "../assets/Sobrancelha.png";
import Pedicure from "../assets/Pedicure.png";
import ManicureClassica from "../assets/ManicureClassica.png";
import ManicureGel from "../assets/ManicureGel.png";
import AlongamentoGel from "../assets/AlongamentoGel.png";

// 🔥 lista original
const servicosBase = [
  { nome: "Nail Art", preco: "R$ 80", img: NailArt },
  { nome: "Sobrancelha", preco: "R$ 30", img: Sobrancelha },
  { nome: "Pedicure", preco: "R$ 50", img: Pedicure },
  { nome: "Manicure Clássica", preco: "R$ 40", img: ManicureClassica },
  { nome: "Manicure em Gel", preco: "R$ 70", img: ManicureGel },
  { nome: "Alongamento em Gel", preco: "R$ 120", img: AlongamentoGel },
];

// 🔥 duplicação para loop infinito
const servicos = [...servicosBase, ...servicosBase];

export default function Servicos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    let scrollAmount = totalWidth / 2;
    let isInteracting = false;

    container.scrollLeft = scrollAmount;

    const autoScroll = () => {
      if (isInteracting) return;

      scrollAmount += 0.3;
      container.scrollLeft = scrollAmount;

      // 🔥 loop infinito invisível
      if (scrollAmount >= totalWidth) {
        scrollAmount = totalWidth / 2;
        container.scrollLeft = scrollAmount;
      }

      if (scrollAmount <= 0) {
        scrollAmount = totalWidth / 2;
        container.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(autoScroll, 16);

    const handleUserScroll = () => {
      scrollAmount = container.scrollLeft;

      if (scrollAmount >= totalWidth) {
        scrollAmount = totalWidth / 2;
        container.scrollLeft = scrollAmount;
      }

      if (scrollAmount <= 0) {
        scrollAmount = totalWidth / 2;
        container.scrollLeft = scrollAmount;
      }
    };

    const startInteraction = () => (isInteracting = true);
    const stopInteraction = () => (isInteracting = false);

    container.addEventListener("scroll", handleUserScroll);
    container.addEventListener("touchstart", startInteraction);
    container.addEventListener("mousedown", startInteraction);

    container.addEventListener("touchend", stopInteraction);
    container.addEventListener("mouseup", stopInteraction);
    container.addEventListener("mouseleave", stopInteraction);

    return () => {
      clearInterval(interval);

      container.removeEventListener("scroll", handleUserScroll);
      container.removeEventListener("touchstart", startInteraction);
      container.removeEventListener("mousedown", startInteraction);
      container.removeEventListener("touchend", stopInteraction);
      container.removeEventListener("mouseup", stopInteraction);
      container.removeEventListener("mouseleave", stopInteraction);
    };
  }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = 240;

    const totalItems = servicosBase.length;
    const index =
      Math.round(container.scrollLeft / cardWidth) % totalItems;

    setActive(index);
  };

  return (
    <section id="servicos" className="servicos">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="titulo">Serviços</h2>
        <p className="subtitulo">
          Cuidado, beleza e elegância para suas mãos
        </p>
      </motion.div>

      <div
        className="servicos-container"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {servicos.map((item, index) => (
          <motion.div
            className={`card ${index % servicosBase.length === active ? "active" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % servicosBase.length) * 0.1 }}
          >
            <img src={item.img} alt={item.nome} />

            <div className="card-info">
              <h3>{item.nome}</h3>
              <span>{item.preco}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* dots */}
      <div className="dots">
        {servicosBase.map((_, index) => (
          <span
            key={index}
            className={index === active ? "dot active" : "dot"}
          />
        ))}
      </div>

      <div className="agendamentoCarrosel">
        <a href="#agendamento" className="btn-agendar">
          Agendar agora
        </a>
      </div>
    </section>
  );
}