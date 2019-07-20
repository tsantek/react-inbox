import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import Message from "./Message";

const Messages = () => {
  const context = useContext(MessageContext);
  return (
    <div>
      {context.messages.map(message => {
        return <Message key={message.id} message={message} />;
      })}
    </div>
  );
};

export default Messages;
