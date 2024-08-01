/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple1' : "#6921C5",
        'purple2' : "#9421dc",
        'black3' : "#1f1f1f",
        'black4' : "#1e1e1e",
        'divider1' : "#cac4d0",
        'divider2' : "#585489",
        'secondary1' : "#786aa0" 

      },
      boxShadow: {
        'header' : '0 1px 12px 0 rgba(105, 33, 197, 0.3)',
        'headerHover' : '0 2px 14px 0 rgba(105, 33, 197, 0.5)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
