import React from "react";

const dummyNews = [
  { id: 1, title: "React 19 — нові можливості", date: "2025-10-01" },
  { id: 2, title: "Vite стає дефакто інструментом збірки", date: "2025-08-12" },
  { id: 3, title: "TypeScript 5.6 вийшов у реліз", date: "2025-09-05" },
];

export default function News() {
  return (
    <div>
      <h2>News</h2>
      <ul style={{ marginTop: 10 }}>
        {dummyNews.map((n) => (
          <li key={n.id} className="todo-item">
            <strong>{n.title}</strong> — <em>{n.date}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
