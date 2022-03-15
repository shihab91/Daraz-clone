// action -> add to cart
// action type?
// add to card -> state modify
// return state

import { cartActionTypes } from "redux/types";

// dispatcher -> dispatch->{type: "ADD_TO_CART",payload:{}}

function cartReducer(state: IProduct[] = [], action: any) {
  //! action type should be fixed
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case cartActionTypes.REMOVE_FROM_CART:
      const newState = state.filter((item) => item._id !== action.payload);
      return newState;
    case cartActionTypes.CLEAR_CART:
      return [];
    default:
      return state;
  }
}
export default cartReducer;
