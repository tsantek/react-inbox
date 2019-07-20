import React, { createContext, useReducer, useEffect } from "react";
import { messageReducer } from "../reducers/messageReducer";

export const MessageContext = createContext();

const MessageContextProvider = props => {
  const [messages, dispatch] = useReducer(messageReducer, []);

  // useEffect(() => {

  // }, [books]);

  return (
    <MessageContext.Provider value={{ messages, dispatch }}>
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
