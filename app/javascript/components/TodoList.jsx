import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

import styles from './TodoList.scss';

class TodoList extends PureComponent {
  render () {
    let todos = this.props.todos.map((todo, key) => {
      return (
        <Todo
          key={key}
          todo={todo}
          handleTodoRemove={this.props.handleTodoRemove}
        />
      );
    });

    if (todos.length === 0) {
      todos = [<li className={styles.noTodos}>No todos yet</li>];
    }

    return (
      <ul className={styles.todoList}>
        {todos}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleTodoRemove: PropTypes.func.isRequired,
};

export default TodoList;
