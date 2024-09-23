import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";

function AllItems() {
  const { state, dispatch } = useContext(StoreProvider);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/item/${id}`);
  };

  const addToCart = (e, product) => {
    e.stopPropagation();
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {state.products.map((product) => (
        <div
          key={product.id}
          className="bg-platinum p-4 rounded-lg shadow-md cursor-pointer"
          onClick={() => handleItemClick(product.id)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-keppel font-bold">${product.price.toFixed(2)}</p>
          <button
            className="mt-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors"
            onClick={(e) => addToCart(e, product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllItems;
