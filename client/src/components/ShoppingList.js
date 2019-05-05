import React, { Component } from "react";
import { Container, Button, List } from "semantic-ui-react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import { PropTypes } from "prop-types";
import ItemModal from "./ItemModal";

class ShoppingList extends Component {
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
                    onClick={this.onDeleteClick.bind(this, id)}
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

const mapDispatchToProps = { deleteItem, getItems };

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ShoppingList);
