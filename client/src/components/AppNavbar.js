import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, Menu } from "semantic-ui-react";

class AppNavbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu attached="top">
          <Dropdown item icon="wrench" simple>
            <Dropdown.Menu>
              <Dropdown.Item>Home</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Save...</Dropdown.Item>
              <Dropdown.Item
                href="https://github.com/MysterieDev"
                target="_blank"
              >
                My Github
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </div>
    );
  }
}

export default AppNavbar;
