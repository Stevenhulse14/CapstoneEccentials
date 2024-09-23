import React from "react";
import { AllItems } from "./";

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-keppel">
        Welcome to Our Store
      </h1>
      <AllItems />
    </div>
  );
}

export default Home;
