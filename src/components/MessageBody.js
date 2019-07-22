import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const MessageBody = () => {
  const { messages } = useContext(MessageContext);

  let showMessage = messages.filter(message => message.open);
  return (
    <div className="container">
      {showMessage.length > 0 ? (
        <div className="row message-body">
          <div className="col-xs-11 col-xs-offset-1">{showMessage[0].body}</div>
        </div>
      ) : (
        "Please select message to see content"
      )}
    </div>
  );
};

export default MessageBody;
