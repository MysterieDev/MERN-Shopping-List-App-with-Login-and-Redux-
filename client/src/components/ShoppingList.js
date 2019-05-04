import React, { Component } from "react";
import { Container, Button, List, Icon } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

class ShoppingList extends Component {
  state = {
    items: [
      {
        id: uuid(),
        name: "Eggs"
      },
      {
        id: uuid(),
        name: "Meat"
      },
      {
        id: uuid(),
        name: "Milk"
      },
      {
        id: uuid(),
        name: "Steak"
      }
    ]
  };
  render() {
    const { items } = this.state;

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

export default ShoppingList;
