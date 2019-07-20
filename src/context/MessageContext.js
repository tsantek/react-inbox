import React, { createContext, useReducer, useEffect } from "react";
import { messageReducer } from "../reducers/messagesReducer";
import axios from "axios";
export const MessageContext = createContext();

const MessageContextProvider = props => {
  const [messages, dispatch] = useReducer(messageReducer, []);

  useEffect(() => {
    dispatch({ type: "FETCHING_MESSAGES" });
    axios
      .get("https://galvanizeapibooks.herokuapp.com/api/messages")
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
