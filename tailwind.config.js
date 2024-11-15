/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "custom-radial": "radial-gradient(circle, #693B9333 20%, #6EBFF40B 44.8%, #4690D400 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#7127BA",
        grey: "#CCD6F6",
        lightGrey: "#E2E4E9",
        darkGrey: "#878EA1"
      },
    },
  },
  plugins: [],
};
