import React from "react";

const CardCart = ({ item, onAdd, onRemove, onDelete }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md p-4 border border-gray-300 hover:shadow-lg transition-shadow">
      {/* Imagem do produto - Coluna da esquerda */}
      <div className="w-full sm:w-1/4 sm:mr-4 mb-4 sm:mb-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-contain"
        />
      </div>

      {/* Conteúdo do produto - Coluna da direita */}
      <div className="w-full sm:w-3/4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">{item.name}</h2>
        <p className="text-sm text-gray-600 mb-2">Preço: R$ {item.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mb-4">Quantidade: {item.quantity}</p>

        {/* Descrição do produto */}
        <p className="text-sm text-gray-500 mb-4">{item.description}</p>

        {/* Controles de quantidade */}
        <div className="flex items-center justify-end gap-2 mt-auto">
          <button
            onClick={() => onAdd(item.id)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
          >
            -
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Remover
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
