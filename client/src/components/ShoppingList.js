import React, { Component } from "react";
import { Container, Button, List, Icon } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import { getItems } from "../actions/itemActions";
import { PropTypes } from "prop-types";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items } = this.props.item;

    return (
      <Container>
        <Button
          style={{ margin: "10px" }}
          primary
          onClick={() => {
            const name = prompt("Enter Item");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add Item
        </Button>

        <List ordered>
          <TransitionGroup>
            {items.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <List.Item as="p">
                  <Button
                    negative
                    icon="delete"
                    style={{
                      cursor: "grab",
                      paddingRight: "5px",
                      fontSize: "10px"
                    }}
                    onClick={() => {
                      this.setState(state => ({
                        items: state.items.filter(item => item.id !== id)
                      }));
                    }}
                  />
                  {name}
                </List.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </List>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  //item represents state (prop but we're mapping the state to the component property)
  item: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
  //name "item" coming from reducer
  item: state.item
});

export default connect(
  mapStatetoProps,
  { getItems }
)(ShoppingList);
