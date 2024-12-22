import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const handleBuyClick = () => {
    console.log("comprando...");
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto shadow-lg">
      {/* Imagem do Produto */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-50
         object-cover rounded-t-lg"
      />

      {/* Detalhes do Produto */}
      <div className="flex flex-col items-center justify-between text-center">
        <h2 className="text-md font-semibold text-gray-800 line-clamp-1 md:line-clamp-2">
          {product.name}
        </h2>
        <p className="text-xl font-bold text-primary">R${product.price}</p>
        {/* Seção de Avaliação */}
        <div className="flex justify-end w-full mt-2">
          <button
            onClick={handleBuyClick}
            className="p-1 bg-secondary w-full hover:bg-black text-black hover:text-white rounded-l-lg transition duration-200"
          >
            Comprar
          </button>
          <div className="flex flex-row justify-center items-center bg-black p-1 rounded-r-lg">
            <FaStar className="text-yellow-500" />
            <span className="ml-1 text-white">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
