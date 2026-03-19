import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Galeria.css";

import NailArt from "../assets/NailArt.png";
import Sobrancelha from "../assets/Sobrancelha.png";
import Pedicure from "../assets/Pedicure.png";
import ManicureClassica from "../assets/ManicureClassica.png";
import ManicureGel from "../assets/ManicureGel.png";
import AlongamentoGel from "../assets/AlongamentoGel.png";

const imagens = [
  NailArt,
  Sobrancelha,
  Pedicure,
  ManicureClassica,
  ManicureGel,
  AlongamentoGel,
  NailArt,
  ManicureGel,
];

export default function Galeria() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="galeria">

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="titulo">Galeria</h2>
        <p className="subtitulo">Alguns dos nossos trabalhos</p>
      </motion.div>

      <div className="grid">
        {imagens.map((img, index) => (
          <motion.div
            className="item"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onClick={() => setSelected(img)}
          >
            <img src={img} alt="trabalho" loading="lazy" />
            <div className="overlay-glass" />
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected}
              className="modal-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}