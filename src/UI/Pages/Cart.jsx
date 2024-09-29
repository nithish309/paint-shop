import React from 'react';

const Cart = ({ cartItems = [], setCartItems }) => {
  
  // Calculate the total amount based on cart items
  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0); // 0 -> initial value
  
  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold lora-regular">Cart is empty</h1>
      </div>
    );
  }

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <section className="lora-regular mb-10 mt-20">
      <div className="flex flex-wrap justify-center gap-10">
        {/* Display cart items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="card card-side bg-base-100 shadow-xl flex flex-col items-center w-screen max-w-xs"
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
            </figure>
            <div className="card-body">
              <h6 className="card-title font-semibold text-lg">{item.name}</h6>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹ {item.totalPrice.toFixed(2)}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn bar"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-bold mt-10 text-center">
        Total Amount: ₹ {totalAmount.toFixed(2)} 
      </h3>
    </section>
  );
};

export default Cart;
