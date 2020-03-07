const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SUGGESTION_LIST': {
      return {...state, ...action.payload};
    }
    case 'SET_CATEGORY_LIST': {
      return {...state, ...action.payload};
    }
    case 'SET_SELECTED_MOVIE': {
      return {...state, selectedMovie: action.payload.movie};
    }
    case 'SET_MOVIE_SEARCH_RESULT': {
      return {...state, ...action.payload};
    }
    default:
      return state;
  }
};

export default reducer;
