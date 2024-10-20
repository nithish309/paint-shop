import { Routes, Route } from 'react-router-dom';
import Products from './UI/Pages/Products';
import Homepage from './UI/Pages/Homepage';
import Contact from './UI/Pages/Contact';
import Location from './UI/Pages/Location';
import ProductDetails from './UI/Pages/ProductDetails';
import Navbar from './UI/Components/Navabar';
import Footer from './UI/Components/Footer';
import Cart from './UI/Pages/Cart';
import "../src/index.css";
import prod1 from "/images/1.png";
import prod4 from "/images/4.png";
import prod5 from "/images/5.png";
import prod7 from "/images/7.png";
import prod8 from "/images/8.png";
import prod9 from "/images/9.png";
import prod10 from "/images/10.png";
import prod11 from "/images/11.png";
import prod12 from "/images/12.png";

const PaintTypes=[
  {
    id: 1,
    title:"Oil Paint",
    description:"Oil paint colours for homes come under versatile wall paint names as they can be applied as a primer, undercoat, and even a finish coat of paint.",
    image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/oil-paint-for-home.jpg"
  },
  {
    id: 2,
    title:"Enamel Paint",
    description:"Enamel Paint is Known for its exceptional water resistance, stain resistance, and overall durability, enamel paint stands as a top-notch choice.",
    image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/enamel-paint-for-home.jpg"
  },
  {
    id: 3,
    title:"Emulsion Paint",
    description:"Enamel Paint is Known for its exceptional water emulsion paint offers a rich variety of wall finishes, along with a captivating texture that enhances your space, stain resistance, and overall durability.",
    image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/emulsion-paint-for-home.jpg"
  },
  {
    id: 4,
    title:"Anti-Corrosive Paint",
    description:"Anti-corrosive paint is among the types of paint for a home that is used to cover iron and steel surfaces such as window grills, pipes, etc.",
    image:"https://static.asianpaints.com/content/dam/asian_paints/blog/december-22/anti-corrosive-paint-for-home.jpg"
  }, 
]

const ProductsList = [
  {
    id: 1,
    name: "Generic Asian Paint Royal Luxury Emulsion 1Ltr. Desert Belge - Beige",
    price: "₹ 573",
    image: prod1,
    description:`Asian Paints Royale Luxury Emulsion 1Ltr - Desert Belge (Beige) is an excellent choice for those seeking a high-quality interior paint that combines beauty with durability. Its luxurious finish, ease of maintenance, and eco-friendly properties make it perfect for enhancing the aesthetics of any space, whether in residential or commercial settings.`
  },
  {
    id: 2,
    name: "AsianPaints Apcolite Premium Satin Enamel",
    price: "₹ 485",
    image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/metals-apcolite-premium-satin-enamel-asian-paints.png",
    description:`Apcolite Premium Satin Enamel is a versatile paint option that combines durability with aesthetic appeal, making it a popular choice for various applications. Its satin finish provides a nice balance between elegance and practicality, ensuring that surfaces look good while being easy to clean and maintain.`
  },
  {
    id: 3,
    name: "AsianPaintss Passion Flower Wall Paint",
    price: "₹ 500",
    image: "https://content.jdmagicbox.com/quickquotes/images_main/asian-paintss-passion-flower-wall-paint-160031745-rkbqxdfn.png",
    description:`Asian Paints Passion Flower Wall Paint is an ideal choice for those seeking a beautiful and durable interior paint. Its elegant color, ease of maintenance, and eco-friendly properties make it perfect for enhancing the aesthetics of any space, whether in residential or commercial settings.`
  }, 
  {
    id: 4,
    name: "Berger Walmasta",
    price: "₹ 260",
    image: prod4,
    description:`Berger Walmasta is a reliable wall putty that enhances the quality of wall surfaces, ensuring a smooth finish and improved durability. Its ease of application and water-resistant properties make it a popular choice for both professional painters and DIY projects. Whether for new constructions or renovations, Walmasta helps create a strong foundation for a beautiful paint job.`
    },
  {
    id: 5,
    name: "Berger Home Shield Dampstop For Interior And Exterior",
    price: "₹ 609",
    image: prod5,
    description:`Berger Home Shield Dampstop is an effective solution for preventing moisture-related damage to walls, ensuring the durability and aesthetic appeal of both interior and exterior surfaces. Its easy application and quick drying time make it a practical choice for homeowners and professionals alike, providing peace of mind against dampness and its associated issues.`
  },
  {
    id: 6,
    name: "Berger Luxol XTRA Super Gloss Enamel",
    price: "₹ 395",
    image: "https://5.imimg.com/data5/SELLER/Default/2021/6/KA/JN/FV/12309025/luxol-xtra-super-gloss-enamel.png",
    description:`Berger Luxol XTRA Super Gloss Enamel is an excellent choice for anyone looking to achieve a durable, glossy finish on various surfaces. Its combination of aesthetic appeal, durability, and ease of application makes it a preferred option for both residential and commercial projects, ensuring long-lasting beauty and protection.`
  },
  {
    id: 7,
    name: "Berger Luxol High Gloss Enamel",
    price: "₹ 288",
    image: prod7,
    description:`Berger Luxol High Gloss Enamel is an excellent choice for achieving a durable, glossy finish on a variety of surfaces. Its combination of aesthetic appeal, resistance to wear and tear, and ease of application makes it a popular option for both residential and commercial projects, ensuring lasting beauty and protection.`
  },
  {
    id: 8,
    name: "AsianPaints Royale Health Shield Anti Bacterial All Surface Coating Paint- 1L",
    price: "₹ 900",
    image: prod8,
    description:`Asian Paints Royale Health Shield Anti-Bacterial All Surface Coating Paint is an excellent choice for those looking for a combination of beauty and functionality. Its anti-bacterial properties, durability, and ease of maintenance make it a smart option for a wide range of applications, ensuring both aesthetic appeal and health benefits in the spaces where it is used.`
  },
  {
    id: 9,
    name: "Nippon Wood Magic Wood Paint - Turkish Tile (1 Litre)",
    price: "₹ 280",
    image: prod9,
    description:`Nippon Wood Magic Wood Paint - Turkish Tile (1 Litre) is an excellent choice for anyone looking to enhance and protect wooden surfaces. With its vibrant color, durability, and ease of application, it provides both aesthetic appeal and long-lasting protection, making it suitable for a wide range of applications in residential and commercial settings.`
  },
  {
    id: 10,
    name: "NIPPON PAINT Breeze Interiors Wall Paint",
    price: "₹ 250",
    image: prod10,
    description:`Nippon Paint Breeze Interiors Wall Paint is an excellent choice for enhancing interior spaces with its smooth finish, durability, and eco-friendly properties. Its low odor and easy maintenance make it suitable for a variety of settings, ensuring beautiful and long-lasting results in homes and commercial areas alike.`
  },
  {
    id: 11,
    name: "Nippon Momento Ozine Special Effect Paint, Packaging Size: 20 L",
    price: "₹ 350",
    image: prod11,
    description:`Nippon Momento Ozine Special Effect Paint (20 L) is an excellent choice for those seeking to transform their spaces with unique and artistic finishes. Its large packaging size, durability, and ease of application make it ideal for both residential and commercial projects, allowing for stunning visual effects that enhance any environment.`
  },
  {
    id: 12,
    name: "1 L Nippon Paint Weatherbond Advance Exterior Paint",
    price: "₹ 829",
    image: prod12,
    description:`Nippon Paint Weatherbond Advance Exterior Paint (1 L) is an excellent choice for homeowners and professionals seeking a reliable and durable exterior paint. Its weather resistance, mildew protection, and easy application make it perfect for various outdoor projects, ensuring long-lasting beauty and protection for exterior surfaces.`
  },
  {
    id: 13,
    name: "Nerolac Excel Tile Guard",
    price: "₹ 250",
    image: "https://www.nerolac.com/sites/default/files/styles/only_webp/public/Excel-Tile-Guard.png.webp?itok=HJx_Pef7",
    description:`Nerolac Excel Tile Guard is an excellent choice for anyone looking to enhance and protect tiled surfaces. With its waterproofing, stain resistance, and durability, it provides a practical solution for maintaining the appearance and longevity of tiles in both residential and commercial settings.`
  },
  {
    id: 14,
    name: "Nerolac Satin Enamel",
    price: "₹ 250",
    image:"https://www.nerolac.com/sites/default/files/2022-10/Satin_Enamel.png",
    description:`Nerolac Satin Enamel is an excellent choice for those looking for a durable and attractive paint option. Its satin finish, ease of application, and resistance to wear make it suitable for a variety of surfaces and environments, ensuring long-lasting beauty and protection.`
  },
  {
    id: 15,
    name: "Nerolac Wonderwood Melmine",
    price: "₹ 700",
    image:"https://www.nerolac.com/sites/default/files/2022-10/Melmine.png",
    description:`Wonderwood Melmine is an excellent choice for anyone looking to enhance and protect wooden surfaces. With its high-quality finish, durability, and moisture resistance, it provides a practical solution for maintaining the beauty and longevity of wood in various settings.`
  },
  
];
import { useState,useEffect } from 'react';
const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCartItems = localStorage.getItem('cartItems');
      return savedCartItems ? JSON.parse(savedCartItems) : [];
    } catch (error) {
      console.error("Error parsing cartItems from localStorage:", error);
      return []; 
    }
  });

  // Update localStorage whenever cartItems state changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
//theme


  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };

  // Apply the theme to the body
  useEffect(() => {
    document.body.className = theme; // Add theme class to the body
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Homepage props={PaintTypes} theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/products" element={<Products products={ProductsList} setCartItems={setCartItems} theme={theme} />} />           
        <Route path="/products/:id" element={<ProductDetails products={ProductsList} theme={theme} />} /> {/* Dynamic route for product details */}
        <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} theme={theme}/>} />
        <Route path="/location" element={<Location theme={theme}/>} />
      </Routes>
      <Footer />
     </>
  );
};

export default App;