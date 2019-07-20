export const messageReducer = (state, action) => {
  switch (action.type) {
    case "GET_MESSEGES":
      return {
        state: action.payload
      };

    default:
      return { state };
  }
};
