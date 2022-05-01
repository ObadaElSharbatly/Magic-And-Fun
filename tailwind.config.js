module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgL: "url('../../src/imgs/BGhome.jpg')",
        bgS: "url('../../src/imgs/BGhomeSmall.jpg')",
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
  plugins: [],
};
