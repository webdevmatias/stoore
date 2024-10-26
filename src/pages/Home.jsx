import "../App.css";
import ImageSlider from "../componentes/ImageSlider";

// Importando as imagens diretamente
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";


const Home = () => {
  const images = [slide1, slide2, slide3, slide4];

  return (
    <>
      <section className="flex flex-col justify-center items-center w-screen h-auto mt-16">
        <ImageSlider images={images} />
      </section>
    </>
  );
};

export default Home;
