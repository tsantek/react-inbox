import React from "react";
import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import NewMsg from "./components/NewMsg";

function App() {
  return (
    <div className="container">
      <Header />
      <NewMsg />
      <Messages />
    </div>
  );
}

export default App;
