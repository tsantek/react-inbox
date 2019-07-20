import React from "react";
import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import NewMsg from "./components/NewMsg";

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
