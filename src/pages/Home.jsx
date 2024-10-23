import { FaHome, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import "../App.css";

function Home({ setCartItemCount }) {
  const handleAddToCart = () => {
    setCartItemCount(prevCount => prevCount + 1); // Incrementa o contador
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-3xl font-bold">Home</h1>
        <button 
          onClick={handleAddToCart} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Adicionar ao Carrinho
        </button>
      </section>
    </>
  );
}

export default Home;
