import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="bg-onyx text-platinum p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold mr-4">
            Logo
          </Link>
          <Link to="/" className="mr-4 hover:text-keppel">
            Home
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cart" className="mr-4 hover:text-keppel">
            🛒 Cart
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="mr-4 bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-saffron text-onyx px-4 py-2 rounded hover:bg-keppel"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
