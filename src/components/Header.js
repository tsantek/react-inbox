import React, { useContext, useState } from "react";
import { MessageContext } from "../context/MessageContext";
import AddNewMessage from "./AddNewMessage";
import MessegesAPI from "../api/MessegesAPI";

const Header = () => {
  const context = useContext(MessageContext);
  const [toggle, setToggle] = useState(false);
  let totalUnread = 0;

  context.messages.map(message => {
    if (message.read === false) {
      totalUnread += 1;
    }
  });

  let selectedMsg = context.messages.filter(message => message.selected);
  let selectedMessagesIds = selectedMsg.map(message => message.id);

  const handleUnselectAll = () => {
    context.dispatch({
      type: "SELECT_ALL_FALSE"
    });
  };

  const handleSelectAll = () => {
    context.dispatch({
      type: "SELECT_ALL_TRUE"
    });
  };

  const handleMarkAsRead = () => {
    MessegesAPI.patch("/messages", {
      messageIds: selectedMessagesIds,
      command: "read",
      read: true
    }).catch(e => console.log(e));
    context.dispatch({
      type: "MARK_AS_READ",
      payload: selectedMsg
    });
  };

  const handleMarkAsUnread = () => {
    MessegesAPI.patch("/messages", {
      messageIds: selectedMessagesIds,
      command: "read",
      read: false
    }).catch(e => console.log(e));
    context.dispatch({
      type: "MARK_AS_UNREAD",
      payload: selectedMsg
    });
  };

  const handleDeleteMessage = () => {
    MessegesAPI.patch("/messages", {
      messageIds: selectedMessagesIds,
      command: "delete"
    })
      .then(res => console.log(res))
      .catch(e => console.log(e));
    context.dispatch({
      type: "DELETE_MESSAGE"
    });
  };

  return (
    <div className="container">
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{totalUnread}</span>
            unread {totalUnread === 1 ? "message" : "messages"}
          </p>
          <a className="btn btn-danger" onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <i className="fa fa-plus" />
            ) : (
              <i className="fa fa-minus" />
            )}
          </a>
          {selectedMsg.length === 0 ? (
            <button class="btn btn-default" onClick={handleSelectAll}>
              <i class="fa fa-square-o" />
            </button>
          ) : selectedMsg.length === context.messages.length ? (
            <button className="btn btn-default" onClick={handleUnselectAll}>
              <i className="fa fa-check-square-o" />
            </button>
          ) : (
            <button className="btn btn-default" onClick={handleSelectAll}>
              <i className="fa fa-minus-square-o" />
            </button>
          )}

          <button className="btn btn-default" onClick={handleMarkAsRead}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={handleMarkAsUnread}>
            Mark As Unread
          </button>

          <select className="form-control label-select">
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select">
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={handleDeleteMessage}>
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
      {toggle && <AddNewMessage />}
    </div>
  );
};

export default Header;
