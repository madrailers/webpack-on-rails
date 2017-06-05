import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

class TodoList extends PureComponent {
  render () {
    const todos = this.props.todos.map((todo, key) => {
      return (
        <Todo
          key={key}
          todo={todo}
          handleTodoRemove={this.props.handleTodoRemove}
        />
      );
    });

    return (
      <ul>
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
