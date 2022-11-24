const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: { },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

module.exports = config;
