import React, { Component } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  state = {
    todos: [
      { id: uuidv4(), title: "Setup project", completed: true },
      { id: uuidv4(), title: "Build components", completed: false },
      { id: uuidv4(), title: "Wire up state & events", completed: false },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
