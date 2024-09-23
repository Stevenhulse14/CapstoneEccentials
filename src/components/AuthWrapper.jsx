import React from "react";

function AuthWrapper({ children, title }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-timberwolf text-onyx">
      <h1 className="text-4xl font-bold mb-8 text-keppel">{title}</h1>
      <div className="bg-platinum p-8 rounded-lg shadow-md w-full max-w-md">
        {children}
      </div>
    </div>
  );
}

export default AuthWrapper;
