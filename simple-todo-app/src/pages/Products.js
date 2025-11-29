import React, { useState, useEffect } from "react";
import { getTodos, createTodo, deleteTodo } from "../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getTodos();
      setProducts(data);
    } catch (err) {
      setError("Не вдалося завантажити продукти: " + err.message);
      console.error("Error loading products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProductName.trim() || !newProductPrice) return;

    setLoading(true);
    try {
      const newProduct = {
        name: newProductName,
        price: Number(newProductPrice),
        description: newProductDescription,
      };
      await createTodo(newProduct);
      setNewProductName("");
      setNewProductPrice("");
      setNewProductDescription("");
      await loadProducts();
    } catch (err) {
      setError("Не вдалося додати продукт: " + err.message);
      console.error("Error adding product:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteTodo(id);
      await loadProducts();
    } catch (err) {
      setError("Не вдалося видалити продукт: " + err.message);
      console.error("Error deleting product:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      
      <form onSubmit={handleAddProduct} className="form-container" style={{ flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
          <input
            type="text"
            className="input-text"
            placeholder="Назва продукту..."
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            disabled={loading}
            required
          />
          <input
            type="number"
            className="input-text"
            placeholder="Ціна..."
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            disabled={loading}
            required
            style={{ maxWidth: '150px' }}
          />
        </div>
        
        <textarea
          className="input-text"
          placeholder="Опис продукту (необов'язково)..."
          value={newProductDescription}
          onChange={(e) => setNewProductDescription(e.target.value)}
          disabled={loading}
          rows={3}
          style={{ 
            width: '100%', 
            resize: 'vertical',
            fontFamily: 'inherit'
          }}
        />
        
        <button 
          type="submit" 
          className="input-submit"
          disabled={loading}
          style={{ width: '100%' }}
        >
          {loading ? 'Завантаження...' : 'Додати'}
        </button>
      </form>

      {loading && products.length === 0 ? (
        <p>Завантаження...</p>
      ) : (
        <ul style={{ marginTop: 20 }}>
          {products.map((product) => (
            <li key={product._id} className="todo-item">
              <div style={{ flex: 1 }}>
                <div>
                  <strong>{product.name}</strong> — ${product.price}
                </div>
                {product.description && (
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#666', 
                    marginTop: '5px' 
                  }}>
                    {product.description}
                  </div>
                )}
              </div>
              <button 
                onClick={() => handleDeleteProduct(product._id)}
                disabled={loading}
                className="todo-item button"
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      )}

      {products.length === 0 && !loading && (
        <p>Немає продуктів. Додайте перший!</p>
      )}
    </div>
  );
}