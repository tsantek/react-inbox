import React, { useContext, useState } from "react";
import { MessageContext } from "../context/MessageContext";
import AddNewMessage from "./AddNewMessage";

const Header = () => {
  const context = useContext(MessageContext);
  const [toggle, setToggle] = useState(false);

  let totalUnread = 0;

  context.messages.map(message => {
    if (!message.read) {
      totalUnread += 1;
    }
  });

  return (
    <div className="container">
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{totalUnread}</span>
            unread messages
          </p>
          <a className="btn btn-danger" onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <i className="fa fa-plus" />
            ) : (
              <i className="fa fa-minus" />
            )}
          </a>

          <button className="btn btn-default">
            <i className="fa fa-minus-square-o" />
          </button>

          <button className="btn btn-default">Mark As Read</button>

          <button className="btn btn-default">Mark As Unread</button>

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

          <button className="btn btn-default">
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
      {toggle && <AddNewMessage />}
    </div>
  );
};

export default Header;
