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

    case "STAR":
      return state.map(message => {
        if (message.id === action.payload) {
          return {
            ...message,
            starred: !message.starred
          };
        } else {
          return message;
        }
      });

    case "MARK_AS_READ":
      return state.map(message => {
        if (message.selected) {
          return {
            ...message,
            read: true
          };
        } else {
          return {
            ...message,
            read: message.read
          };
        }
      });

    case "MARK_AS_READ_ONE":
      return state.map(message => {
        if (message.id === action.payload) {
          return {
            ...message,
            read: true,
            open: true
          };
        } else {
          return {
            ...message,
            read: message.read,
            open: false
          };
        }
      });

    case "MARK_AS_UNREAD":
      return state.map(message => {
        if (message.selected) {
          return {
            ...message,
            read: false
          };
        } else {
          return {
            ...message,
            read: message.read
          };
        }
      });

    case "DELETE_MESSAGE":
      return state.filter(message => !message.selected);

    case "ADD_NEW_MESSAGE":
      return [...state, action.payload];

    case "APPLY_LABEL":
      return action.payload;

    case "REMOVE_LABEL":
      return action.payload;

    default:
      return state;
  }
};
