// api.js

export const URL = `${import.meta.env.VITE_API_URL}`;

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Create a new product
export const createProduct = async (product) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

// Edit a product
export const editProduct = async (id, updatedProduct) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error editing product:", error);
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
