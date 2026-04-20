export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1d3d2f",
        green: "#2d5e42",
        leaf: "#4a8c60",
        mint: "#e8f2ec",
        gold: "#b8983a",
        "gold-lt": "#e8d68a",
        cream: "#faf8f3",
        muted: "#5a5a5a",
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
