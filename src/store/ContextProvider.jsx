import React, { createContext, useReducer } from "react";
import { users, products } from "../data";

export const StoreProvider = createContext();

const initialState = {
  user: [...users],
  products: [...products],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreProvider.Provider value={{ state, dispatch }}>
      {children}
    </StoreProvider.Provider>
  );
};
