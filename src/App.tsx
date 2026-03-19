import Agendamento from "./components/Agendamento";
import Footer from "./components/Footer";
import Galeria from "./components/Galeria";
import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import "./App.css";
import Header from "./components/Header";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Servicos />
      <Agendamento />
      <Galeria />
      <Footer />
    </>
  );
}

export default App;