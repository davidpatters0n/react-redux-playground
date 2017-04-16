// Core
import React from 'react';
import { Link } from 'react-router-dom';

// Third party components
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

// Styles
import './index.css';

const handleDelete = (props, event) => {
  props.handleDelete(event);
}

const TodoList = (props) => {
  return (
    <ListGroup>
      {props.todos.map((todo, index) => {
        const todoClass = todo.completed ? 'completed' : 'uncompleted'
        return (
          <ListGroupItem key={index}>
            <div className={`todo-item ${todoClass}` } data-key={index}>
              <Link to={`${props.match.url}/${todo.id}`}>
                {todo.text}
              </Link>
            </div>
            <div className="pull-right remove-todo" data-key={index} onClick={handleDelete.bind(this, props)}>
              &times;
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}

export default TodoList;
