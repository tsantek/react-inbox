export const messageReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_MESSAGES":
      return state;
    case "GET_MESSEGES":
      return action.payload;
    default:
      return state;
  }
};
