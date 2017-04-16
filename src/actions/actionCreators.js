export const addTodo = (id, text, completed=false) => {
  return {
    type: 'ADD_TODO',
    id,
    text,
    completed
  }
}

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    index
  }
}

export const toggleCompleted = (index) => {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

export const toggleFilter = (filter) => {
  return {
    type: 'SET_TOGGLE_FILTER',
    filter
  }
}

export const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_UNCOMPLETED':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}
