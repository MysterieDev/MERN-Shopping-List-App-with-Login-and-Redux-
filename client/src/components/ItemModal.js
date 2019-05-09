import React, { Component } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import { PropTypes } from "prop-types";
import { get } from "mongoose";
class ItemModal extends Component {
  state = { modalOpen: false, name: "" };

  static propTypes = {
    isAuthenticated: PropTypes.bool
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };

    //Add Item via addItem action
    this.props.addItem(newItem);

    this.handleClose();
  };

  getModalTrigger = () => {
    if (this.props.isAuthenticated) {
      return (
        <Button
          color="black"
          onClick={this.handleOpen}
          style={{ margin: "10px" }}
        >
          Add New Item
        </Button>
      );
    } else {
      return <h3>Welcome, please log in to manage items</h3>;
    }
  };
  render() {
    return (
      <Modal
        trigger={this.getModalTrigger()}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Content>
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label style={{ color: "white" }}> Item</label>
              <input
                placeholder="Item Name"
                name="name"
                type="text"
                id="item"
                onChange={this.onChange}
              />
            </Form.Field>
            <Button type="submit">Submit Item</Button>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={this.handleClose} inverted>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
