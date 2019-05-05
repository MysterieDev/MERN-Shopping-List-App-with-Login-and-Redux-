import {
  GET_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
  GET_ITEMS,
  ITEMS_LOADING
} from "../actions/types";

const intialState = {
  items: [],
  loading: false
};

export default function(state = intialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload, loading: false };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEM:
      return { ...state, items: [action.payload, ...state.items] };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return { ...state };
  }
}
