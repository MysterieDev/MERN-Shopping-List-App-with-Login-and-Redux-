import { GET_ITEM, ADD_ITEM, DELETE_ITEM, GET_ITEMS } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS,
    payload: "get"
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
