import React, { createContext, useReducer, useEffect } from "react";
import { messageReducer } from "../reducers/messagesReducer";
import MessegesAPI from "../api/MessegesAPI";
export const MessageContext = createContext();

const MessageContextProvider = props => {
  const [messages, dispatch] = useReducer(messageReducer, []);

  useEffect(() => {
    dispatch({ type: "FETCHING_MESSAGES" });
    MessegesAPI.get("/messages")
      .then(res =>
        dispatch({
          type: "GET_MESSEGES",
          payload: res.data
        })
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <MessageContext.Provider value={{ messages, dispatch }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
