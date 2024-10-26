// componentes/NavBar.jsx
import React from "react";
import { FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";

function NavBar({ setCurrentSection, cartItemCount }) {
  return (
    <nav className="flex flex-row justify-around fixed bottom-0 bg-primary w-full mb-0 md:mb-8 md:w-2/5 h-auto rounded-t-lg md:rounded-xl">
      <button
        className="flex flex-col items-center justify-center shadow-sm w-1/3 focus:outline-none"
        onClick={() => setCurrentSection("home")}
        aria-label="Home"
      >
        <FaHome className="text-white text-3xl md:text-3xl my-2 md:my-2" />
      </button>

      <button
        className="flex flex-col items-center justify-center relative shadow-sm w-1/3 focus:outline-none"
        onClick={() => setCurrentSection("carrinho")}
        aria-label="Carrinho"
      >
        {cartItemCount > 0 && ( // Exibe o círculo se houver itens no carrinho
          <span className="absolute top-1 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {cartItemCount}
          </span>
        )}
        <FaShoppingCart className="text-white text-3xl md:text-3xl my-4 md:my-2" />
      </button>

      <button
        className="flex flex-col items-center justify-center shadow-sm w-1/3 focus:outline-none"
        onClick={() => setCurrentSection("perfil")}
        aria-label="Perfil"
      >
        <FaUserAlt className="text-white text-2xl md:text-2xl my-4 md:my-2" />
      </button>
    </nav>
  );
}

export default NavBar;
