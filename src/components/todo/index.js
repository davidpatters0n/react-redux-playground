import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';

const Todo = (props) => {
  const index = props.todos.findIndex((todo) => todo.id === parseInt(props.match.params.id, 10));
  const todo = props.todos[index]

  return (
    <div>{todo.text}</div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
