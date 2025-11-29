const API_URL = 'https://js-mean.onrender.com';

export const getTodos = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const createTodo = async (todo) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const updateTodo = async (id, todo) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
