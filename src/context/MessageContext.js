import React, { createContext, useReducer, useEffect, useState } from "react";
import { messageReducer } from "../reducers/messagesReducer";
import MessegesAPI from "../api/MessegesAPI";
export const MessageContext = createContext();

const MessageContextProvider = props => {
  const [messages, dispatch] = useReducer(messageReducer, []);
  const [toggleAddNewMessage, setToggleAddNewMessage] = useState(false);
  useEffect(() => {
    dispatch({ type: "FETCHING_MESSAGES" });
    MessegesAPI.get("/messages")
      .then(res =>
        dispatch({
          type: "GET_MESSEGES",
          payload: res.data.map(message => {
            return {
              ...message,
              open: false
            };
          })
        })
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <MessageContext.Provider
      value={{
        messages,
        dispatch,
        toggleAddNewMessage,
        setToggleAddNewMessage
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageContextProvider;
