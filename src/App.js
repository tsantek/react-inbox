import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header
        messages={this.state.messages}
        open={this.state.open}
        toggleAddNewMessageContainer={this.handleTaggle}
      />
      {this.state.open && <NewMsg />}
      <Messages messages={this.state.messages} />
    </div>
  );
};

export default App;
