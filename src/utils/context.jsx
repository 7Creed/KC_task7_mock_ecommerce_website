import React, { useContext, useReducer } from "react";

const defaultState = {
  modal: false,
  isError: false,
  isLoading: false,
  subtotal: 0,
  cart: [],
  products: [],
};

function appReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTS": {
      return { ...state, products: [...payload] };
    }

    case "ADD_CART": {
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    }

    case "REMOVE_CART": {
      let updatedCart = state.cart.filter((item) => item.id !== payload.id);
      return { ...state, cart: [...updatedCart] };
    }

    case "OPEN_MODAL": {
      return { ...state, modal: true };
    }

    case "CLOSE_MODAL": {
      return { ...state, modal: false };
    }

    case "INCREMENT": {
      // const reducedCart = state.cart.reduce((acc, cur) => {
      //   acc[cur.id] = cur
      //   return acc
      // }, {})
      // console.log("reduce",reducedCart)

      // if (reducedCart[payload.id].id === payload.id) {
      //   return {...reducedCart[payload.id], qty: reducedCart[payload.id].qty + 1}
      // } else {
      //   return reducedCart[payload.id]
      // }

      // Using Find method
      const updatedCart = [...state.cart];
      const itemToIncrement = updatedCart.find(
        (item) => item.id === payload.id
      );

      if (itemToIncrement) {
        itemToIncrement.qty += 1;
      }
      return { ...state, cart: updatedCart };

      // Using map method
      // const updatedCart = state.cart.map((item) => {
      //   if (item.id === payload.id) {
      //     return { ...item, qty: item.qty + 1 };
      //   } else {
      //     return item;
      //   }
      // });
      // return { ...state, cart: updatedCart };
    }

    case "DECREMENT": {
      const updatedCart = [...state.cart]; // Create a copy of the cart array

      const itemToIncrement = updatedCart.find(
        (item) => item.id === payload.id
      );

      if (itemToIncrement) {
        itemToIncrement.qty <= 1
          ? (itemToIncrement.qty = 1)
          : (itemToIncrement.qty -= 1); // Increment the quantity of the found item
      }

      return { ...state, cart: updatedCart };
      // return {...state, qty: Number(state.qty) - 1}
    }

    case "LOADING": {
      return { ...state, isLoading: true };
    }

    case "NOT_LOADING": {
      return { ...state, isLoading: false };
    }

    case "SET_SUBTOTAL": {
      return { ...state, subtotal: action.payload };
    }

    default:
      return state;
  }
}

const AppContext = React.createContext("");
console.log("AppContext");
console.log(AppContext);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  console.log("state");
  console.log(state);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
      {/* <div>AppProvider</div> */}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
