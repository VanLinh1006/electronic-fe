module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ghtk: '#00904a',
        active: '#00904a',
        inactive: '#AEB0B6',
        'ghtk-light': '#069255',
        'ghtk-hint': '#808080',
      },
    },
  },
};
