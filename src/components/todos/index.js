// Core
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

// Components
import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';

// Styles
import './index.css';

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }
  /* Action Handlers */

  handleDelete(event) {
    const { key } = event.target.dataset
    this.props.deleteTodo(parseInt(key, 10));
  }

  handleCompleted(event) {
    const { key } = event.target.dataset
    this.props.toggleCompleted(parseInt(key, 10));
  }

  handleVisibility(event) {
    const filterType = event.target.dataset.visibility;
    this.props.toggleFilter(filterType)
  }

  handleSubmit(event) {
    event.preventDefault()

    const todoId = this.props.todos.length + 1
    this.props.addTodo(todoId, this.state.newTodo);
    this.setState({newTodo: ''});
  }

  handleChange(event) {
    this.setState({newTodo: event.target.value});
  }
  /* END Action Handlers */

  render() {
    return (
      <div className="col-md-6 todo-list-container">
        <TodoList
          todos={this.props.todos}
          handleDelete={this.handleDelete.bind(this)}
          handleCompleted={this.handleCompleted.bind(this)}
          match={this.props.match}
        />
        <AddTodo
          newTodo={this.state.newTodo}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
         />
        <Footer handleVisibility={this.handleVisibility.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: actionCreators.getVisibleTodos(state.todos, state.toggleFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
