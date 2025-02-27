export default function fieldReducer(state, action) {
  switch (action.type) {
    case "FIELD": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "CLEAR": {
      return {
        ...state,
        [action.fieldName]: null,
      };
    }
    default:
      return state;
  }
}
