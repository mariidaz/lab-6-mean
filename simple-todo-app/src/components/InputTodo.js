import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title.trim();
    if (!title) return;
    this.props.addTodoProps(title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <input type="submit" className="input-submit" value="Submit" />
      </form>
    );
  }
}

export default InputTodo;
