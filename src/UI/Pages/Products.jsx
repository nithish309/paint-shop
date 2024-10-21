import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';

const Products = ({ products, setCartItems,theme,toggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate(); // For navigation

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setLoading(true);

    setTimeout(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setFilteredProducts(filtered);
      setLoading(false);
    }, 1000);
  };

  // Handle adding product to cart
  const handleAddToCart = (product) => {
    const quantity = prompt(`Enter quantity :`, 1);
  
    if (quantity && parseInt(quantity) > 0) {
      // Parse the price as a number
      const price = parseFloat(product.price.replace('₹', '').replace(',', '').trim());
      const cartItem = {
        ...product,
        quantity: parseInt(quantity),
        totalPrice: price * parseInt(quantity), 
      };
  
      setCartItems((prevItems) => [...prevItems, cartItem]);
  
      // Navigate to cart after adding
      // navigate('/cart');
      alert('Product added to cart!');
    }
    else {
      alert('Please enter a valid quantity.');
    }
  };
  

  return (
    <div>
      <section className="lora-regular lg:mt-10 mt-5 lg:mb-10 mb-5 lora-regular"  style={{backgroundColor: theme === 'light' ? 'white' : '#333', 
                  color: theme === 'light' ? 'black' : '#fff'}}>
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold text-center">
          Paints
        </h1>
        <div className="lg:flex justify-end lg:mr-5 lg:-mt-10 flex justify-end mr-2 -mt-10 md:w-auto">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered lg:w-96 w-32 md:w-full"
              value={searchTerm}
              onChange={handleSearchChange}
               style={{  backgroundColor: theme === 'light' ? 'white' : 'grey', 
              color: theme === 'light' ? '#333' : '#fff'}}
            />
          </div>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-wrap justify-center lg:gap-20 lg:mt-5 lg:mb-20 mb-10 mt-5 sm:gap-0">
           
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  className="card bg-white lg:w-96 sm:w-full mx-2 my-4 hover:shadow-2xl hover:shadow-slate-400 rounded-none hover:border rounded-xl border-black"
                  key={product.id}
                  style={{  backgroundColor: theme === 'light' ? 'white' : '#333', 
                    color: theme === 'light' ? '#333' : '#fff'}}
                >
                  <figure className="px-10 pt-10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-xl"
                      width="100px"
                      height="100px"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <p className="lg:text-lg lg:font-semibold text-sm font-bold md:text-md md:font-semibold">
                      {product.name}
                    </p>
                    <h2 className="lg:font-medium lg:text-xl sm:text-lg font-bold">
                      {product.price}
                    </h2>
                    <div className="card-actions mt-2 flex justify-between items-center">
                      <Link to={`/products/${product.id}`} className="btn btn lora-regular">
                        View
                      </Link>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn lora-regular"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-10 font-bold lg:text-2xl text-lg">No products found</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Products;
