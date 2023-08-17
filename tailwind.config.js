module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.css',
  ],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      serif: ["Fira Sans", "sans-serif"],
      mono: ["Fredoka One", "sans-serif"],
    },
  },
  variants: {
    animation: ({ after }) => after(['motion-safe', 'motion-reduce']),
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
