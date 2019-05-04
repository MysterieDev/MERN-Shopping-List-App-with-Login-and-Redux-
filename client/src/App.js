import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import "./components/AppNavbar";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

class App extends Component {
  render() {
    const containerStyle = {
      paddingTop: "50px"
    };
    return (
      <React.Fragment>
        <AppNavbar />
        <ShoppingList />
      </React.Fragment>
    );
  }
}

export default App;
