import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./components/AppNavbar";
import AppNavbar from "./components/AppNavbar";

class App extends Component {
  render() {
    const containerStyle = {
      paddingTop: "50px"
    };
    return (
      <Container text style={containerStyle}>
        <AppNavbar />
        <h1> Hello </h1>
      </Container>
    );
  }
}

export default App;
