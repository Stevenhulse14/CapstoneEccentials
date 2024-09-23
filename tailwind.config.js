/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#35373D", // Primary
        timberwolf: "#D9D9D9", // Secondary
        platinum: "#E6E6E6", // Tertiary
        keppel: "#47B8B8", // Accent
        saffron: "#F4C430", // Accent
      },
    },
  },
  plugins: [],
};
