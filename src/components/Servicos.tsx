import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Servicos.css";

import NailArt from "../assets/NailArt.png";
import Sobrancelha from "../assets/Sobrancelha.png";
import Pedicure from "../assets/Pedicure.png";
import ManicureClassica from "../assets/ManicureClassica.png";
import ManicureGel from "../assets/ManicureGel.png";
import AlongamentoGel from "../assets/AlongamentoGel.png";

const servicos = [
  { nome: "Nail Art", preco: "R$ 80", img: NailArt },
  { nome: "Sobrancelha", preco: "R$ 30", img: Sobrancelha },
  { nome: "Pedicure", preco: "R$ 50", img: Pedicure },
  { nome: "Manicure Clássica", preco: "R$ 40", img: ManicureClassica },
  { nome: "Manicure em Gel", preco: "R$ 70", img: ManicureGel },
  { nome: "Alongamento em Gel", preco: "R$ 120", img: AlongamentoGel },
];

export default function Servicos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const autoScroll = () => {
        scrollAmount += 0.3; // 🔥 velocidade (ajusta aqui)

        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0; // volta pro início
        }
    };

    const interval = setInterval(autoScroll, 16); // ~60fps

    return () => clearInterval(interval);
    }, []);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = 240; // largura real do card + gap
    const index = Math.round(container.scrollLeft / cardWidth);

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
            className={`card ${index === active ? "active" : ""}`}
            key={index}

            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={item.img} alt={item.nome} />

            <div className="card-info">
              <h3>{item.nome}</h3>
              <span>{item.preco}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* indicadores */}
      <div className="dots">
        {servicos.map((_, index) => (
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