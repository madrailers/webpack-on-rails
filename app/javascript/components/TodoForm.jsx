import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class TodoForm extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      todo: '',
    };

    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit (event) {
    event.preventDefault();
    this.props.handleTodoAdd(this.state.todo);
    this.setState({todo: ''});
  }

  handleTodoChange (event) {
    event.preventDefault();
    this.setState({todo: event.target.value});
  }

  render () {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          onChange={this.handleTodoChange}
          value={this.state.todo}
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleTodoAdd: PropTypes.func.isRequired,
};

export default TodoForm;
