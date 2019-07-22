import React, { useContext, useState } from "react";
import { MessageContext } from "../context/MessageContext";
import MessegesAPI from "../api/MessegesAPI";

const AddNewMessage = () => {
  const context = useContext(MessageContext);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const AddNewMessage = e => {
    e.preventDefault();

    MessegesAPI.post("/messages", { subject, body })
      .then(res =>
        context.dispatch({
          type: "ADD_NEW_MESSAGE",
          payload: res.data
        })
      )
      .catch(e => console.log(e));
    setSubject("");
    setBody("");
    context.setToggleAddNewMessage(!context.toggleAddNewMessage);
  };

  return (
    <div className="container">
      <form className="form-horizontal well" onSubmit={AddNewMessage}>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-4">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter a subject"
              name="subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Body</label>
          <div className="col-sm-10">
            <textarea
              name="body"
              id="body"
              className="form-control"
              value={body}
              onChange={e => setBody(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div style={{ float: "right", padding: "10px" }}>
            <input type="submit" value="Send" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewMessage;
