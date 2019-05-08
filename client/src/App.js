import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import "./components/AppNavbar";
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

import { Provider } from "react-redux";
//Importing file store.js
import store from "./store";
import { loadUser } from "./actions/authActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <AppNavbar />
          <ShoppingList />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
