export const INITIAL_STATES = {
  loading: false,
  error: false,
  data: [],
};

export function dataReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, error: true, data: [] };
    default:
      return state;
  }
}
