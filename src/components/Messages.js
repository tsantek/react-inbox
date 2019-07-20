import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import Message from "./Message";

const Messages = () => {
  const context = useContext(MessageContext);
  return (
    <>
      {context.messages.map(message => {
        return <Message message={message} />;
      })}
    </>
  );
};

export default Messages;
