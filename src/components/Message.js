import React from "react";

const Message = props => {
  const { message } = props;
  let msg;

  if (!message.read && !message.starred) {
    msg = "row message unread";
  }

  if (message.read && !message.starred) {
    msg = "row message read";
  }
  if (message.starred) {
    msg = "row message read";
  }

  return (
    <div className={msg}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" />
          </div>
          <div className="col-xs-2">
            {message.starred ? (
              <i className="star fa fa-star-o" />
            ) : (
              <i className="star fa fa-star" />
            )}
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {message.labels.length > 0 &&
          message.labels.map(lable => {
            return <span class="label label-warning">{lable}</span>;
          })}
        <a style={{ cursor: "pointer" }} href="#">
          {message.subject}
        </a>
      </div>
    </div>
  );
};

export default Message;
