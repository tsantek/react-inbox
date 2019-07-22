import React, { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import MessegesAPI from "../api/MessegesAPI";
const Message = props => {
  const context = useContext(MessageContext);
  const { message } = props;
  let msg;
  if (!message.read && !message.selected) {
    msg = "row message unread";
  } else if (message.read === false && message.selected) {
    msg = "row message unread selected";
  } else if (message.read && message.selected) {
    msg = "row message read selected";
  } else {
    msg = "row message read";
  }

  const handleChangeChecked = (e, id) => {
    context.dispatch({
      type: "CHECKED",
      payload: id
    });
  };

  const handleChangeStar = id => {
    MessegesAPI.patch("/messages", {
      messageIds: [id],
      command: "star"
    })
      .then(res => {
        context.dispatch({
          type: "STAR",
          payload: id
        });
      })
      .catch(e => console.log(e));
  };

  const handleOpen = id => {
    MessegesAPI.patch("/messages", {
      messageIds: [id],
      command: "read",
      read: true
    }).catch(e => console.log(e));
    context.dispatch({
      type: "MARK_AS_READ_ONE",
      payload: id
    });
  };

  return (
    <div className="container">
      <div className={msg}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                type="checkbox"
                checked={message.selected}
                onChange={e => handleChangeChecked(e, message.id)}
              />
            </div>
            <div
              className="col-xs-2"
              onClick={() => handleChangeStar(message.id)}
            >
              {message.starred ? (
                <i className="star fa fa-star" />
              ) : (
                <i className="star fa fa-star-o" />
              )}
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {message.labels.length > 0 &&
            message.labels.map(lable => {
              return (
                <span key={lable} className="label label-warning">
                  {lable}
                </span>
              );
            })}
          <a href="#nowhere" style={{}} onClick={() => handleOpen(message.id)}>
            {message.subject}
          </a>
        </div>
      </div>
      {/* BODY */}

      {message.open && (
        <div className="container">
          <div className="row message-body">
            <div className="col-xs-11 col-xs-offset-1">{message.body}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
