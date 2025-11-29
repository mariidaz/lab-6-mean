import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <h2>Profile</h2>
      <p style={{ marginTop: 10 }}>
        Вітаю! Ви авторизовані. Це приватна сторінка профілю, доступна лише після логіну.
      </p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: 20,
          padding: "8px 16px",
          backgroundColor: "#d35e0f",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          borderRadius: 4,
        }}
      >
        Вийти
      </button>
    </div>
  );
}