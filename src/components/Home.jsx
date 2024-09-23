import React, { useState } from "react";
import { Login, Register, AuthWrapper } from "./";

function Home({ isLoggedIn, handleLogin }) {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <AuthWrapper title="Welcome to Our App">
      {!isLoggedIn && (
        <>
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 font-semibold rounded-l-lg transition-colors ${
                isLoginForm
                  ? "bg-keppel text-white"
                  : "bg-onyx text-platinum hover:bg-timberwolf hover:text-onyx"
              }`}
              onClick={() => setIsLoginForm(true)}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-r-lg transition-colors ${
                !isLoginForm
                  ? "bg-keppel text-white"
                  : "bg-onyx text-platinum hover:bg-timberwolf hover:text-onyx"
              }`}
              onClick={() => setIsLoginForm(false)}
            >
              Register
            </button>
          </div>
          {isLoginForm ? (
            <Login handleLogin={handleLogin} />
          ) : (
            <Register handleLogin={handleLogin} />
          )}
        </>
      )}
      {isLoggedIn && <p>Welcome! You are logged in.</p>}
    </AuthWrapper>
  );
}

export default Home;
