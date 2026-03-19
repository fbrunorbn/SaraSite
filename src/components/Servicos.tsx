import { useRef, useState } from "react";
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