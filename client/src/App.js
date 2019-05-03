import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container, Header, Icon } from "semantic-ui-react";

class App extends Component {
  render() {
    const containerStyle = {
      paddingTop: "50px"
    };
    return (
      <Container text style={containerStyle}>
        <Header as="h2">
          <Icon name="shopping cart" />
          <Header.Content>Shopping List</Header.Content>
        </Header>
        <h1> Hello </h1>
      </Container>
    );
  }
}

export default App;
