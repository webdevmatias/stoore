import "../App.css";
import ImageSlider from "../componentes/ImageSlider";
import ProductCard from "../componentes/ProductCard";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

const products = [
  {
    image: slide1,
    name: "Notebook Dell Inspiron 15 - Intel Core i5, 8GB RAM, 256GB SSD",
    price: 2999.99,
    rating: 4.5,
  },
  {
    image: slide2,
    name: "Notebook Lenovo Ideapad 3 - AMD Ryzen 5, 8GB RAM, 512GB SSD",
    price: 2399.99,
    rating: 4.0,
  },
  {
    image: slide3,
    name: "Notebook Acer Nitro V15 - Intel Core i7, 16GB RAM, 1TB HDD",
    price: 2299.99,
    rating: 4.8,
  },
  {
    image: slide4,
    name: "Notebook Acer Nitro V15 - Intel Core i5, 8GB RAM, 512GB SSD",
    price: 3999.99,
    rating: 4.2,
  },
  {
    image: slide1,
    name: "Notebook ASUS ZenBook 14 - Intel Core i7, 16GB RAM, 512GB SSD",
    price: 4999.99,
    rating: 4.6,
  },
  {
    image: slide2,
    name: "Notebook HP Pavilion 15 - AMD Ryzen 5, 8GB RAM, 1TB HDD",
    price: 3799.99,
    rating: 4.3,
  },
  {
    image: slide3,
    name: "Notebook Dell XPS 13 - Intel Core i7, 16GB RAM, 1TB SSD",
    price: 6999.99,
    rating: 4.9,
  },
  {
    image: slide4,
    name: "Notebook Lenovo ThinkPad T14 - Intel Core i7, 16GB RAM, 512GB SSD",
    price: 4699.99,
    rating: 4.7,
  },
  {
    image: slide1,
    name: "Notebook Acer Aspire 5 - Intel Core i5, 8GB RAM, 256GB SSD",
    price: 2399.99,
    rating: 4.1,
  },
  {
    image: slide2,
    name: "Notebook MSI GF63 - Intel Core i5, 8GB RAM, 512GB SSD",
    price: 3799.99,
    rating: 4.4,
  },
  {
    image: slide3,
    name: "Notebook Razer Blade 15 - Intel Core i7, 16GB RAM, 1TB SSD",
    price: 7999.99,
    rating: 4.8,
  },
  {
    image: slide4,
    name: "Notebook HP Omen 15 - AMD Ryzen 7, 16GB RAM, 1TB SSD",
    price: 4999.99,
    rating: 4.5,
  },
];

const Home = () => {
  const images = [slide1, slide2, slide3, slide4];

  return (
    <>
      <div className="flex flex-col items-center w-full h-full">
        <section className="flex flex-col justify-center w-full items-center mt-16">
          <ImageSlider images={images} />
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
