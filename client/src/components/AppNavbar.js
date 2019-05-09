import React, { Component, Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Menu } from "semantic-ui-react";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class AppNavbar extends Component {
  state = {};

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Logout />
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <LoginModal />
        <Dropdown.Divider />
        <RegisterModal />
      </Fragment>
    );

    return (
      <div>
        <Menu attached="top">
          <Dropdown item icon="wrench" simple>
            <Dropdown.Menu>
              <Dropdown.Item>Home</Dropdown.Item>

              <Dropdown.Divider />
              <Dropdown.Item
                href="https://github.com/MysterieDev"
                target="_blank"
              >
                My Github
              </Dropdown.Item>
              <Dropdown.Divider />
              {isAuthenticated ? authLinks : guestLinks}
            </Dropdown.Menu>
          </Dropdown>
          {user ? `Welcome ${user.name}` : ""}
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
