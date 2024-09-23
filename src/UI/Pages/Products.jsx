import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Use Link to route dynamically
import Navbar from '../Components/Navabar';
import Footer from '../Components/Footer';
import LoadingSpinner from '../Components/LoadingSpinner';

const Products = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State to store the search term
  const [filteredProducts, setFilteredProducts] = useState(products); // State for filtered products
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setLoading(true); // Start loading when search begins

    // Simulate a delay for loading (optional, for effect)
    setTimeout(() => {
      // Filter products based on the search term
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(value)
      );
      setFilteredProducts(filtered);
      setLoading(false); // Stop loading when filtering is complete
    }, 1000); // Adjust delay as necessary
  };

  return (
    <div>
      <Navbar />
      <section className="lora-regular lg:mt-10 mt-5 lg:mb-10 mb-5 lora-regular">
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold text-center">
          Paints We Sell
        </h1>
        <div className="lg:flex justify-end lg:mr-5 lg:-mt-10 flex justify-end mr-2 -mt-10 md:w-auto">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered lg:w-96 w-20 md:w-auto"
              value={searchTerm}
              onChange={handleSearchChange} // Update search term on change
            />
          </div>
        </div>

        {/* Display loading spinner in place of cards */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="flex flex-wrap justify-center lg:gap-20 lg:mt-5 lg:mb-20 mb-10 mt-5 sm:gap-0">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id}>
                  {/* Use Link to route to the product details page */}
                  <div className="card bg-white lg:w-96 sm:w-full mx-2 my-4 hover:shadow-2xl hover:cursor-pointer hover:shadow-slate-400 rounded-none hover:border rounded-xl border-black">
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
                      <h2 className="lg:card-title lg:font-medium sm:font-bold">
                        {product.name}
                      </h2>
                      <h4 className="lg:font-bold lg:text-xl sm:text-lg font-bold">
                        {product.price}
                      </h4>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center mt-10">No products found.</p>
            )}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Products;
