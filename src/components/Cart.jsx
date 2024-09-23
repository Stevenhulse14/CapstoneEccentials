import React, { useContext } from "react";
import { StoreProvider } from "../store/ContextProvider";

function Cart() {
  const { state, dispatch } = useContext(StoreProvider);

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const total = state.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {state.cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 px-2 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
