module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
      },

      keyframes: {

        bounce: {
          '0%, 100%': {transform: 'translateX(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'},
          '50%': {transform: 'translateX(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'},
        }

      },
    },
  },
  plugins: [],
}
