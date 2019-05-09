import React, { Component } from "react";
import { Container, Button, List, Segment } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import { PropTypes } from "prop-types";
import ItemModal from "./ItemModal";

class ShoppingList extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    //item represents state (prop but we're mapping the state to the component property)
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <ItemModal />
        <List ordered>
          <TransitionGroup>
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <List.Item as="p">
                  <Segment>
                    {this.props.isAuthenticated ? (
                      <Button
                        negative
                        icon="delete"
                        style={{
                          cursor: "grab",
                          paddingRight: "5px",
                          fontSize: "10px"
                        }}
                        onClick={this.onDeleteClick.bind(this, _id)}
                      />
                    ) : (
                      ""
                    )}
                    {name}
                  </Segment>
                </List.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </List>
      </Container>
    );
  }
}

const mapStatetoProps = state => ({
  //name "item" coming from reducer
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = { deleteItem, getItems };

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ShoppingList);
