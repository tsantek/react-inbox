import React, { useContext, useState } from "react";
import { MessageContext } from "../context/MessageContext";
import AddNewMessage from "./AddNewMessage";
import MessegesAPI from "../api/MessegesAPI";

const Header = () => {
  const context = useContext(MessageContext);
  const [applyLabel, setLabel] = useState("");
  const [removeLabel, setRemoveLable] = useState("");
  let totalUnread = 0;

  context.messages.map(message => {
    if (message.read === false) {
      totalUnread += 1;
    }
    return totalUnread;
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
      .then(res => {
        context.dispatch({
          type: "DELETE_MESSAGE"
        });
      })
      .catch(e => console.log(e));
  };

  const handleApplyLabel = e => {
    MessegesAPI.patch("/messages", {
      messageIds: selectedMessagesIds,
      command: "addLabel",
      label: e.target.value
    })
      .then(res => {
        context.dispatch({
          type: "APPLY_LABEL",
          payload: res.data
        });
      })
      .catch(e => console.log(e));

    setLabel("");
  };

  const handleRemoveLabel = e => {
    MessegesAPI.patch("/messages", {
      messageIds: selectedMessagesIds,
      command: "removeLabel",
      label: e.target.value
    })
      .then(res => {
        context.dispatch({
          type: "REMOVE_LABEL",
          payload: res.data
        });
      })
      .catch(e => console.log(e));
    setRemoveLable("");
  };

  return (
    <div className="container">
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{totalUnread}</span>
            unread {totalUnread === 1 ? "message" : "messages"}
          </p>
          <button
            className="btn btn-danger"
            onClick={() =>
              context.setToggleAddNewMessage(!context.toggleAddNewMessage)
            }
          >
            {!context.toggleAddNewMessage ? (
              <i className="fa fa-plus" />
            ) : (
              <i className="fa fa-minus" />
            )}
          </button>

          {selectedMsg.length === 0 ? (
            <button className="btn btn-default" onClick={handleSelectAll}>
              <i className="fa fa-square-o" />
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

          {selectedMsg.length > 0 ? (
            <>
              <button className="btn btn-default" onClick={handleMarkAsRead}>
                Mark As Read
              </button>
              <button className="btn btn-default" onClick={handleMarkAsUnread}>
                Mark As Unread
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-default" disabled>
                Mark As Read
              </button>
              <button className="btn btn-default" disabled>
                Mark As Unread
              </button>
            </>
          )}

          <select
            className="form-control label-select"
            onChange={handleApplyLabel}
            value={applyLabel}
          >
            <option value="apply-label">Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select
            className="form-control label-select"
            onChange={handleRemoveLabel}
            value={removeLabel}
          >
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
      {context.toggleAddNewMessage && <AddNewMessage />}
    </div>
  );
};

export default Header;
