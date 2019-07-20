import React from "react";

const AddNewMessage = () => {
  return (
    <div className="container">
      <form className="form-horizontal well">
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
            />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Body</label>
          <div className="col-sm-10">
            <textarea name="body" id="body" className="form-control" />
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
