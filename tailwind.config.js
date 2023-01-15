/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    colors: {
      "blue-1": "hsl(222, 61%, 15%)",
      "blue-2": "hsl(202, 46%, 59%)",
      "blue-3": "hsl(222, 61%, 12%)",
      "blue-4": "hsl(202, 46%, 30%)",
      "blue-5": "hsl(222, 61%, 7%)",
      "blue-6": "hsl(222, 61%, 2%)",
      "orange-1": "hsl(42, 36%, 65%)",
      "orange-2": "hsl(36, 24%, 53%)",
      "orange-3": "hsl(43, 56%, 68%)",
      "orange-4": "hsl(7, 62%, 68%)",
    },
    fontFamily: {
      display: ["Exo 2", "sans-serif"],
      alt: ["Passion One"],
    },
    extend: {
      animation: {
        orbit: "orbit 3s linear infinite",
        "orbit-reverse": "orbit 3s linear reverse infinite",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
