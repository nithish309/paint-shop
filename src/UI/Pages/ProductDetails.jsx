import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = ({ products }) => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = products.find((prod) => prod.id === parseInt(id)); // Find the product by its ID

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <section className="lora-regular lg:mt-10 mt-5 lg:mb-10 mb-5 lora-regular ml-3 mr-3">
        <h1 className="text-xl font-medium lg:text-3xl lg:font-bold text-center">
          {product.name}
        </h1>
        <div className="flex justify-center mt-10">
          <div className="bg-white lg:w-96 sm:w-full mx-2 my-0">
            <figure className="px-10 md:flex justify-center sm:flex justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-xl"
                width="300px"
                height="300px"
              />
            </figure>
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h4 className="lg:font-bold lg:text-3xl text-2xl font-bold">
            {product.price} 
          </h4>
          <p className="lg:mt-4 mt-0 text-md text-gray-600 lg:text-lg text-justify ml-3 mr-3">
            {product.description}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails; 