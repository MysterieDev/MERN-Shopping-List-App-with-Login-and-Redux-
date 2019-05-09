import React, { Component } from "react";
import { logout } from "../../actions/authActions";
import { connect } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };
  render() {
    return (
      <Dropdown.Item onClick={this.props.logout} href="#">
        Logout
      </Dropdown.Item>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
