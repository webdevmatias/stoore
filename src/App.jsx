import { useState } from "react";
import { FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "./App.css";
import Home from "./pages/Home";
import Perfil from './pages/Perfil';
import Carrinho from './pages/Carrinho';
import Header from "./componentes/Header";

function App() {
  // Estado para controlar qual seção está visível
  const [currentSection, setCurrentSection] = useState('home');

  // Função para alterar a seção atual
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home />;
      case 'perfil':
        return <Perfil />;
      case 'carrinho':
        return <Carrinho />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Header />
        {renderSection()} {/* Renderiza a seção atual */}
        
        <nav className="flex flex-row justify-around fixed bottom-0 bg-primary w-4/5 h-auto rounded-t-lg">
          <div className="flex flex-col items-center justify-center shadow-sm w-1/3" onClick={() => setCurrentSection('home')}>
            <FaHome className="text-white text-4xl md:text-2xl my-4" />
          </div>
          <div className="flex flex-col items-center justify-center shadow-sm w-1/3" onClick={() => setCurrentSection('carrinho')}>
            <FaShoppingCart className="text-white text-4xl md:text-2xl my-4" />
          </div>
          <div className="flex flex-col items-center justify-center shadow-sm w-1/3" onClick={() => setCurrentSection('perfil')}>
            <FaUserAlt className="text-white text-3xl md:text-xl my-4" />
          </div>
        </nav>
      </section>
    </>
  );
}

export default App;
