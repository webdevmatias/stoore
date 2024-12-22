// App.js
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Carrinho from "./pages/Carrinho";
import Header from "./componentes/Header";
import NavBar from "./componentes/NavBar";

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const [cartItemCount, setCartItemCount] = useState(4);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home setCartItemCount={setCartItemCount} />;
      case "perfil":
        return <Perfil />;
      case "carrinho":
        return <Carrinho />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Header />
        {renderSection()}

        <NavBar
          setCurrentSection={setCurrentSection}
          cartItemCount={cartItemCount}
        />
      </section>
    </>
  );
}

export default App;
