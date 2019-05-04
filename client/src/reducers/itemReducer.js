import uuid from "uuid";
import { GET_ITEM, ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "../actions/types";

const intialState = {
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

export default function(state = intialState, action) {
  switch (action.types) {
    case GET_ITEMS:
      return { ...state };
    default:
      return state;
  }
}