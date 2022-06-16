module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgL: "url('../../src/imgs/magic_balloons/BGhome.jpg')",
        bgS: "url('../../src/imgs/magic_balloons/BGhomeSmall.jpg')",
      },
      boxShadow: {
        service: "0 0 10px 2px #eab308",
        pricing: "0 0 10px 2px white",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1024px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
