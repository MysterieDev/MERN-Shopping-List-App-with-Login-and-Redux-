import React, { Component } from "react";
import { Button, Modal, Form, Dropdown, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class RegisterModal extends Component {
  state = { modalOpen: false, name: "", email: "", password: "", msg: null };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for Register Error (id from authActions.js)
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    //if Authenticated - close modal
    if (this.state.modalOpen) {
      if (isAuthenticated) {
        this.handleClose();
      }
    }
  }

  handleOpen = () => {
    this.props.clearErrors();
    this.setState({ modalOpen: true });
  };

  handleClose = () => this.setState({ modalOpen: false });

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    //Create User object
    const newUser = {
      name,
      email,
      password
    };

    //Attempt to register
    this.props.register(newUser);

    //this.handleClose();
  };

  render() {
    return (
      <Modal
        trigger={
          <Dropdown.Item href="#" onClick={this.handleOpen}>
            Register
          </Dropdown.Item>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Content>
          {this.state.msg ? (
            <Message floating> {this.state.msg} </Message>
          ) : null}
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label style={{ color: "white" }}> Name</label>
              <input
                placeholder="Name"
                name="name"
                type="text"
                id="name"
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ color: "white" }}> Name</label>
              <input
                placeholder="E-Mail"
                name="email"
                type="email"
                id="email"
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ color: "white" }}> Name</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                id="password"
                onChange={this.onChange}
              />
            </Form.Field>
            <Button type="submit">Register now</Button>
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
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(RegisterModal);
