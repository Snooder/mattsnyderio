module.exports = {
  theme: {
    extend: {
      float: {
        'sm-left': 'left',   // Float left on small screens
        'sm-right': 'right', // Float right on small screens
        'lg-left': 'left',   // Float left on large screens
        'lg-right': 'right', // Float right on large screens
      },
      minWidth: {
        'xxs': '300px', // Custom min-width for extra small screens
        'xs': '400px', // Minimum width for extra small screens
        'lg': '1000px', // Minimum width for large screens
      },
    },
    screens: {
      xs: '400px', // Breakpoint for extra small screens
      lg: '1000px', // Breakpoint for large screens
    },
  },
  plugins: [],
}
