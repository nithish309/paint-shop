import React from 'react';

const Cart = ({ cartItems = [], setCartItems,theme }) => {
  
  // Calculate the total amount based on cart items
  const totalAmount = cartItems.reduce((acc, item) => acc + item.totalPrice, 0); // 0 -> initial value
  
  if (cartItems.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="lg:text-2xl font-bold lora-regular text-lg">Cart is empty</h1>
      </div>
    );
  }

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
  };

  return (
    <section className="lora-regular mb-10 mt-20">
      <div className="flex flex-wrap justify-center gap-10">
        {/* Display cart items */}
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="card card-side bg-base-100 shadow-xl flex flex-col items-center w-screen max-w-xs"
            style={{  backgroundColor: theme === 'light' ? 'white' : '#333', 
              color: theme === 'light' ? '#333' : '#fff'}}
          >
            <figure>
              <img
                src={`https://ps-server-five.vercel.app/products/${item._id}/image`}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
            </figure>
            <div className="card-body text-center">
              <p className="card lg:text-l lg:font-bold text-sm font-bold">{item.name}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹ {item.totalPrice.toFixed(2)}</p>
              <div className="card-actionscenter">
                <button
                  className="btn bar"
                  onClick={() => removeFromCart(item._id)}
                  style={{width:"200px",height:"40px"}}
                
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
