import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Todo extends PureComponent {
  constructor (props) {
    super(props);

    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onRemoveClick (event) {
    event.preventDefault();
    this.props.handleTodoRemove(this.props.todo);
  }

  render () {
    return (
      <li>
        {this.props.todo}
        <a role="button" tabIndex="-1" onClick={this.onRemoveClick}>&times;</a>
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  handleTodoRemove: PropTypes.func.isRequired,
};

export default Todo;
