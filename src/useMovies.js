export const INITIAL_STATES = {
  loading: false,
  error: false,
  movies: [],
};

export function movieReducer(state, action) {
  let array;
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, movies: action.payload };
    case "FETCH_ERROR":
      return { ...state, error: true, movies: [] };
    case "PUSH_MOVIES":
      return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
}
