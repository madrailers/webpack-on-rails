import React, {PureComponent} from 'react';
import {remove}               from 'lodash';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import styles from './App.scss';

class App extends PureComponent {
  constructor () {
    super();

    this.state = {
      todos: [],
    };

    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoRemove = this.handleTodoRemove.bind(this);
  }

  handleTodoAdd (todo) {
    this.setState({todos: [todo, ...this.state.todos]});
  }

  handleTodoRemove (todo) {
    const todos = [...this.state.todos];
    remove(todos, t => t === todo);
    this.setState({todos});
  }

  render () {
    const todos = this.state.todos;

    return (
      <div className={styles.app}>
        <h2>My Todo List</h2>
        <TodoForm handleTodoAdd={this.handleTodoAdd} />
        <TodoList todos={todos} handleTodoRemove={this.handleTodoRemove} />
      </div>
    );
  }
}

export default App;
