export const messageReducer = (state, action) => {
  switch (action.type) {
    case "FETCHING_MESSAGES":
      return state;
    case "GET_MESSEGES":
      return action.payload.map(message => {
        if (!message.selected) {
          return {
            ...message
          };
        } else {
          return message;
        }
      });
    case "SELECT_ALL_FALSE":
      return state.map(message => {
        return {
          ...message,
          selected: false
        };
      });
    case "SELECT_ALL_TRUE":
      return state.map(message => {
        return {
          ...message,
          selected: true
        };
      });
    case "CHECKED":
      return state.map(message => {
        if (message.id === action.payload) {
          return {
            ...message,
            selected: !message.selected
          };
        } else {
          return message;
        }
      });
    default:
      return state;
  }
};
