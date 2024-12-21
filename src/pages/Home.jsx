import "../App.css";
import ImageSlider from "../componentes/ImageSlider";
import ProductCard from "../componentes/ProductCard";

// Imagens para o slider
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

// Imagens dos notebooks
import notebook1 from "../assets/notebooks-stoore/notebook-1.png";
import notebook2 from "../assets/notebooks-stoore/notebook-2.png";
import notebook3 from "../assets/notebooks-stoore/notebook-3.png";
import notebook4 from "../assets/notebooks-stoore/notebook-4.png";
import notebook5 from "../assets/notebooks-stoore/notebook-5.png";
import notebook6 from "../assets/notebooks-stoore/notebook-6.png";
import notebook7 from "../assets/notebooks-stoore/notebook-7.png";
import notebook8 from "../assets/notebooks-stoore/notebook-8.png";
import notebook9 from "../assets/notebooks-stoore/notebook-9.png";
import notebook10 from "../assets/notebooks-stoore/notebook-10.png";
import notebook11 from "../assets/notebooks-stoore/notebook-11.png";
import notebook12 from "../assets/notebooks-stoore/notebook-12.png";

const products = [
  {
    image: notebook1,
    name: "Notebook Dell Inspiron 15 - Intel Core i5, 8GB RAM, 256GB SSD",
    price: 2999.99,
    rating: 4.5,
  },
  {
    image: notebook2,
    name: "Notebook Lenovo Ideapad 3 - AMD Ryzen 5, 8GB RAM, 512GB SSD",
    price: 2399.99,
    rating: 4.0,
  },
  {
    image: notebook3,
    name: "Notebook Acer Nitro V15 - Intel Core i7, 16GB RAM, 1TB HDD",
    price: 2299.99,
    rating: 4.8,
  },
  {
    image: notebook4,
    name: "Notebook Acer Nitro V15 - Intel Core i5, 8GB RAM, 512GB SSD",
    price: 3999.99,
    rating: 4.2,
  },
  {
    image: notebook5,
    name: "Notebook ASUS ZenBook 14 - Intel Core i7, 16GB RAM, 512GB SSD",
    price: 4999.99,
    rating: 4.6,
  },
  {
    image: notebook6,
    name: "Notebook HP Pavilion 15 - AMD Ryzen 5, 8GB RAM, 1TB HDD",
    price: 3799.99,
    rating: 4.3,
  },
  {
    image: notebook7,
    name: "Notebook Dell XPS 13 - Intel Core i7, 16GB RAM, 1TB SSD",
    price: 6999.99,
    rating: 4.9,
  },
  {
    image: notebook8,
    name: "Notebook Lenovo ThinkPad T14 - Intel Core i7, 16GB RAM, 512GB SSD",
    price: 4699.99,
    rating: 4.7,
  },
  {
    image: notebook9,
    name: "Notebook Acer Aspire 5 - Intel Core i5, 8GB RAM, 256GB SSD",
    price: 2399.99,
    rating: 4.1,
  },
  {
    image: notebook10,
    name: "Notebook MSI GF63 - Intel Core i5, 8GB RAM, 512GB SSD",
    price: 3799.99,
    rating: 4.4,
  },
  {
    image: notebook11,
    name: "Notebook Razer Blade 15 - Intel Core i7, 16GB RAM, 1TB SSD",
    price: 7999.99,
    rating: 4.8,
  },
  {
    image: notebook12,
    name: "Notebook HP Omen 15 - AMD Ryzen 7, 16GB RAM, 1TB SSD",
    price: 4999.99,
    rating: 4.5,
  },
];

const Home = () => {
  const sliderImages = [slide1, slide2, slide3, slide4];

  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <section className="flex flex-col justify-center w-full items-center mt-28 md:mt-24">
          <ImageSlider images={sliderImages} />
        </section>
        
        <section className="flex flex-row flex-wrap justify-center mt-4 mb-20 w-full">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
