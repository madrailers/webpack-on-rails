import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import styles from './Todo.scss';

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
      <li className={styles.todo}>
        <a role="button" tabIndex="-1" onClick={this.onRemoveClick}>&times;</a>
        {this.props.todo}
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  handleTodoRemove: PropTypes.func.isRequired,
};

export default Todo;
