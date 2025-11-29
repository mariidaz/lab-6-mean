import React from "react";

const completedStyle = {
  fontStyle: "italic",
  color: "#d35e0f",
  opacity: 0.4,
  textDecoration: "line-through",
};

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleChangeProps(todo.id)}
      />
      <button onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
    </li>
  );
};

export default TodoItem;
