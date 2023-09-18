/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        system: ["system-ui", "sans-serif"],
        Avenir: ["Avenir", "sans-serif"],
        Helvetica: ["Helvetica", "sans-serif"],
        Arial: ["Arial", "sans-serif"],
      },
    },
    colors: {
      bgColor: "#f3f4f6",
      text700: "#374151",
      text400: "#94a3b8",
      text300: "#cbd5e1",
      white: "#fff",
      primary700: "#4338ca",
      primary600: "#4f46e5",
      primary100: "#4f46e5",
      rose500: "#f43f5e",
    },
  },
  plugins: [],
};
