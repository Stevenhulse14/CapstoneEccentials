import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreProvider } from "../store/ContextProvider";

function SingleItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state: { products },
  } = useContext(StoreProvider);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
      >
        Back to All Items
      </button>
      <div className="bg-platinum p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-keppel font-bold text-xl mb-4">
          ${product.price.toFixed(2)}
        </p>
        <button className="w-full bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel hover:text-platinum transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleItem;
