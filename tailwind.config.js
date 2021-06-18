module.exports = {
  //mode: 'jit',
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.css',
  ],
  darkMode: false, // or 'media' or 'class'
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
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
