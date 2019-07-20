import React from "react";
import "./App.css";
import MessageContextProvider from "./context/MessageContext";
import Header from "./components/Header";
import Messages from "./components/Messages";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <MessageContextProvider>
        <div className="container">
          <Header />
          <Messages />
        </div>
      </MessageContextProvider>
    </div>
  );
};

export default App;
