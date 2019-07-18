import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Messages from "./components/Messages";
import NewMsg from "./components/NewMsg";
import axios from "axios";

class App extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/messages")
      .then(res => {
        const messages = res.data;
        this.setState({
          messages,
          open: false
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="container">
        <Header messages={this.state.messages} />
        <NewMsg />
        <Messages messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
