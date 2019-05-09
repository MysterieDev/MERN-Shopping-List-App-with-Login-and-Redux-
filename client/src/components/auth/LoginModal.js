import React, { Component } from "react";
import { Button, Modal, Form, Dropdown, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";

class LoginModal extends Component {
  state = { modalOpen: false, email: "", password: "", msg: null };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for Register Error (id from authActions.js)
      if (error.id === "LOGIN_FAIL") {
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

    const { email, password } = this.state;
    const user = { email, password };
    this.props.login(user);
  };

  render() {
    return (
      <Modal
        trigger={
          <Dropdown.Item href="#" onClick={this.handleOpen}>
            Login
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
              <label style={{ color: "white" }}> E-Mail</label>
              <input
                placeholder="E-Mail"
                name="email"
                type="email"
                id="email"
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ color: "white" }}> Password</label>
              <input
                placeholder="Password"
                name="password"
                type="password"
                id="password"
                onChange={this.onChange}
              />
            </Form.Field>
            <Button type="submit">Login now</Button>
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
  { login, clearErrors }
)(LoginModal);
