import { useState } from "react";
import "./Agendamento.css";

export default function Agendamento() {
  const [form, setForm] = useState({
    nome: "",
    whats: "",
    dia: "",
    servico: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const mensagem = `Olá! Quero agendar um serviço:

👤 Nome: ${form.nome}
📱 WhatsApp: ${form.whats}
📅 Dia: ${form.dia}
💅 Serviço: ${form.servico}`;

    const url = `https://ig.me/m/saralimanailsdesigne?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="agendamento" className="agendamento">
      <h2 className="titulo">Agendamento</h2>

      <div className="form">
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          onChange={handleChange}
        />

        <input
          type="text"
          name="whats"
          placeholder="Seu WhatsApp"
          onChange={handleChange}
        />

        <input
          type="date"
          name="dia"
          onChange={handleChange}
        />

        <select name="servico" onChange={handleChange}>
          <option value="">Escolha o serviço</option>
          <option>Nail Art</option>
          <option>Sobrancelha</option>
          <option>Pedicure</option>
          <option>Manicure Clássica</option>
          <option>Manicure em Gel</option>
          <option>Alongamento em Gel</option>
        </select>

        <button onClick={handleSubmit}>
          Enviar agendamento
        </button>
      </div>
    </section>
  );
}