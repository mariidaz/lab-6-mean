import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import Login from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Products from "./pages/Products";

function isAuthed() {
  return localStorage.getItem("auth") === "true";
}

function PrivateRoute({ children }) {
  return isAuthed() ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Головна</Link>
        <Link to="/news">Новини</Link>
        <Link to="/products">Продукти</Link>
        <Link to="/profile">Профіль</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<TodoContainer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);