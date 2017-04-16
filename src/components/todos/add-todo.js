import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const AddTodo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="col-md-10">
        <input
          type="text"
          className="form-control"
          value={props.newTodo}
          onChange={props.handleChange}
        />
      </div>
      <Button type="submit" bsStyle="success">Add Todo</Button>
    </form>
  );
}

export default AddTodo;
