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

  handleTaggle = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        open: !this.state.open
      };
    });
  };

  render() {
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
  }
}

export default App;
