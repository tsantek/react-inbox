import React, { Component } from "react";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="row message unread">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" />
              </div>
              <div className="col-xs-2">
                <i className="star fa fa-star-o" />
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <button>Here is some message text that has a bunch of stuff</button>
          </div>
        </div>
        {/* msg 2 */}
        <div className="row message read">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" />
              </div>
              <div className="col-xs-2">
                <i className="star fa fa-star-o" />
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <button>Here is some message text that has a bunch of stuff</button>
          </div>
        </div>
        {/* msg3 */}
        <div className="row message read selected">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" checked="checked" />
              </div>
              <div className="col-xs-2">
                <i className="star fa fa-star-o" />
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <button>Here is some message text that has a bunch of stuff</button>
          </div>
        </div>
        {/* msg4 */}
        <div className="row message read">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" />
              </div>
              <div className="col-xs-2">
                <i className="star fa fa-star" />
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <button>Here is some message text that has a bunch of stuff</button>
          </div>
        </div>
        {/* msg 5 */}
        <div className="row message read">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" />
              </div>
              <div className="col-xs-2">
                <i className="star fa fa-star" />
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <span className="label label-warning">dev</span>
            <span className="label label-warning">gschool</span>
            <button>Here is some message text that has a bunch of stuff</button>
          </div>
        </div>
        {/* msg 6 */}
        <div className="row message read">
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">
                <input type="checkbox" />
              </div>
              <div className="col-xs-2">
                <i className="star fa fa-star" />
              </div>
            </div>
          </div>
          <div className="col-xs-11">
            <span className="label label-warning">dev</span>
            <span className="label label-warning">gschool</span>
            <button>Here is some message text that has a bunch of stuff</button>
          </div>
        </div>

        <div className="row message-body">
          <div className="col-xs-11 col-xs-offset-1">
            This is the body of the message.
          </div>
        </div>
      </div>
    );
  }
}

export default Messages;
