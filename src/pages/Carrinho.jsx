import React, { useState } from "react";
import "../App.css";

// Imagens dos notebooks
import notebook1 from "../assets/notebooks-stoore/notebook-1.png";
import notebook2 from "../assets/notebooks-stoore/notebook-2.png";
import notebook3 from "../assets/notebooks-stoore/notebook-3.png";
import notebook4 from "../assets/notebooks-stoore/notebook-4.png";

import CardCart from "../componentes/CartCard"; // Importe o CardCart

const initialCartItems = [
  {
    id: 1,
    image: notebook1,
    name: "Notebook Dell Inspiron 15 - Intel Core i5, 8GB RAM, 256GB SSD",
    price: 2999.99,
    quantity: 1,
    description: "Notebook de alto desempenho com 8GB de RAM e SSD de 256GB, ideal para tarefas do dia a dia e multitarefa."
  },
  {
    id: 2,
    image: notebook2,
    name: "Notebook Lenovo Ideapad 3 - AMD Ryzen 5, 8GB RAM, 512GB SSD",
    price: 2399.99,
    quantity: 2,
    description: "Notebook Lenovo com processador Ryzen 5, 8GB de RAM e SSD de 512GB, perfeito para trabalho e lazer."
  },
  {
    id: 3,
    image: notebook3,
    name: "Notebook Acer Nitro V15 - Intel Core i7, 16GB RAM, 1TB HDD",
    price: 2299.99,
    quantity: 1,
    description: "Notebook gamer Acer com processador Intel Core i7, 16GB de RAM e 1TB de HDD para jogos e desempenho pesado."
  },
  {
    id: 4,
    image: notebook4,
    name: "Notebook Acer - Intel Core i5, 16GB RAM, 1TB HDD",
    price: 3299.99,
    quantity: 1,
    description: "Notebook gamer Acer com processador Intel Core i5, 16GB de RAM e 1TB de HDD para jogos e desempenho pesado."
  },
];

const Carrinho = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Funções para manipular o carrinho
  const handleAdd = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleDelete = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center w-full h-auto bg-primaryLight py-36 px-6">
      <h1 className="text-3xl font-bold text-black mb-8">Carrinho de Compras:</h1>

      {/* Resumo do carrinho */}
      <div className="w-full sm:w-4/5 md:w-3/5 mb-6 bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Resumo do Pedido</h2>
        <div className="flex justify-between text-lg text-gray-600">
          <span>Total:</span>
          <span className="font-bold text-gray-800">R$ {totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Lista de itens no carrinho */}
      <div className="w-full sm:w-4/5 md:w-3/5 max-w-6xl space-y-6">
        {cartItems.map((item) => (
          <CardCart
            key={item.id}
            item={item}
            onAdd={handleAdd}
            onRemove={handleRemove}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrinho;
