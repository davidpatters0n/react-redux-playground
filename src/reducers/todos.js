const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: action.completed
        }
      ];
    case 'DELETE_TODO':
      state.splice(action.index, 1)
      return [ ...state ]
    case 'TOGGLE_TODO':
      state[action.index].completed = !state[action.index].completed
      return [
        ...state,
      ]
    default:
      return state;
  }
}

export default todos;
