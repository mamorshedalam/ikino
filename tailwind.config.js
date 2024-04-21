module.exports = {
  content: ["*.{html,js}"],
  // darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1400px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'dark': '#2E2E2C',
      'light': '#F0EAE1',
      'stone': '#858075',
      'ash': '#E5E0DC',
      'slate': '#635F49',
      'gray': '#EEEBE9',
      'neutral': '#363636',
      'yellow': '#8A792B',
      
    },
  },
  plugins: [],
};
