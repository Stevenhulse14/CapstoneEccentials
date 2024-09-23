import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const decryptPassword = async (encryptedPassword, key, iv) => {
    const decoder = new TextDecoder();
    const importedKey = await crypto.subtle.importKey(
      "raw",
      Uint8Array.from(atob(key), (c) => c.charCodeAt(0)),
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"]
    );
    const decryptedData = await crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: Uint8Array.from(atob(iv), (c) => c.charCodeAt(0)),
      },
      importedKey,
      Uint8Array.from(atob(encryptedPassword), (c) => c.charCodeAt(0))
    );
    return decoder.decode(decryptedData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        setError("User not found");
        return;
      }

      const decryptedPassword = await decryptPassword(
        storedUser.encryptedPassword,
        storedUser.key,
        storedUser.iv
      );

      if (storedUser.email === email && decryptedPassword === password) {
        console.log("Login successful");
        handleLogin();
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-onyx">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-onyx"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 bg-timberwolf border border-onyx rounded-md shadow-sm focus:outline-none focus:ring-keppel focus:border-keppel"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-platinum bg-saffron hover:bg-keppel focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-keppel"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default Login;
