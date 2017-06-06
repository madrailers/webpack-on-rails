import React, {PureComponent} from 'react';
import {remove, each}         from 'lodash';
import {v4 as uuid}           from 'uuid';

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
    this.handleTodoToggle = this.handleTodoToggle.bind(this);
  }

  handleTodoAdd (todoDescription) {
    const todo = {
      id: uuid.v4(),
      label: todoDescription,
      completed: false,
    };
    this.setState({todos: [todo, ...this.state.todos]});
  }

  handleTodoRemove (todoId) {
    const todos = [...this.state.todos];
    remove(todos, t => t.id === todoId);
    this.setState({todos});
  }

  handleTodoToggle (todoId) {
    const todos = [...this.state.todos];
    each(todos, (todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({todos});
  }

  render () {
    const todos = this.state.todos;

    return (
      <div className={styles.app}>
        <h2>My Todo List</h2>
        <TodoForm handleTodoAdd={this.handleTodoAdd} />
        <TodoList
          todos={todos}
          handleTodoRemove={this.handleTodoRemove}
          handleTodoToggle={this.handleTodoToggle}
        />
      </div>
    );
  }
}

export default App;
