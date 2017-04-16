const toggleFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_TOGGLE_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default toggleFilter;
