import { motion } from "framer-motion";
import "./Header.css";

export default function Header() {
  return (
    <motion.header
      className="header"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="nav">

        <a href="#hero">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#agendamento">Agendamento</a>
        <a href="#galeria">Galeria</a>

      </nav>
    </motion.header>
  );
}