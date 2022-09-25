export const INITIAL_VALUES = {
  loading: false,
  error: false,
  movies: {},
};

export function movieReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: false,
        movies: {},
      };
    case "FETCH_SUCCSESS":
      return {
        loading: false,
        error: false,
        movies: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        movies: {},
      };
    default:
      return state;
  }
}
