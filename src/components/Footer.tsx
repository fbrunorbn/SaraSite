import { motion } from "framer-motion";
import "./Footer.css";
import Logo from "../assets/Logo.png";
import { Instagram } from "lucide-react";

<Instagram size={16} />
export default function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* LOGO */}
        <img src={Logo} alt="Sara Silva Lima" className="footer-logo" />

        {/* INSTAGRAM */}
        <a
          href="https://instagram.com/saralimanailsdesigne"
          target="_blank"
          className="footer-insta"
        >
          <Instagram size={16} />

        </a>

        {/* DIREITOS */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>

      </motion.div>

    </footer>
  );
}