import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (username === "Admin" && password === "12345") {
      localStorage.setItem("auth", "true");
      setError("");
      navigate("/profile", { replace: true });
    } else {
      localStorage.setItem("auth", "false");
      setError("Ім'я користувача або пароль введені не вірно");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit} className="form-container" style={{ maxWidth: 480 }}>
        <input
          className="input-text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="input-text"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" className="input-submit" value="Login" />
      </form>
      {error && <p style={{ color: "crimson", marginTop: 10 }}>{error}</p>}
    </div>
  );
}
