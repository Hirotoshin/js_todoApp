import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList';
class App extends Component {
  render() {
    return (
      <div>
        <h1>TodoApp</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
