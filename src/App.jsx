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
  const [cartItemCount, setCartItemCount] = useState(0); // Estado para a contagem de itens no carrinho

  // Função para alterar a seção atual
  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home setCartItemCount={setCartItemCount} />; // Passa a função para o componente Home
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
        <Header cartItemCount={cartItemCount} /> {/* Passa a contagem para o Header */}
        {renderSection()} {/* Renderiza a seção atual */}
        
        <nav className="flex flex-row justify-around fixed bottom-0 bg-primary w-4/5 h-auto rounded-t-lg">
          <div className="flex flex-col items-center justify-center shadow-sm w-1/3" onClick={() => setCurrentSection('home')}>
            <FaHome className="text-white text-3xl md:text-3xl my-4" />
          </div>
          <div className="flex flex-col items-center justify-center relative shadow-sm w-1/3" onClick={() => setCurrentSection('carrinho')}>
            {cartItemCount > 0 && ( // Exibe o círculo se houver itens no carrinho
              <span className="absolute top-1 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
            <FaShoppingCart className="text-white text-3xl md:text-3xl my-4" />
          </div>
          <div className="flex flex-col items-center justify-center shadow-sm w-1/3" onClick={() => setCurrentSection('perfil')}>
            <FaUserAlt className="text-white text-2xl md:text-2xl my-4" />
          </div>
        </nav>
      </section>
    </>
  );
}

export default App;
