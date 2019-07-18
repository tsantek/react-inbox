import React, { Component } from "react";

class Message extends Component {
  msgClass() {
    const { message } = this.props;
    let msg = "row message read";

    // msg not red and not starred √
    if (!message.read && !message.starred) {
      msg = "row message unread ";
    }
    // msg read - unstarred
    if (message.read && !message.starred) {
      msg = "row message read ";
    }

    // msg selected
    if (message.selected) {
      msg = "row message read selected";
    }

    // msg read and selected
    if (message.read && message.starred) {
      msg = "row message read";
    }

    return msg;
  }

  render() {
    return (
      <div className={this.msgClass()}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.message.selected} />
            </div>
            <div className="col-xs-2">
              {this.props.message.starred ? (
                <i class="star fa fa-star" />
              ) : (
                <i className="star fa fa-star-o" />
              )}
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a>{this.props.message.subject}</a>
        </div>
      </div>
    );
  }
}

export default Message;
