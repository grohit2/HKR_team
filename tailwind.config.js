/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./{app,category-pages,data-engineer,hire-talent,home,ui-ux-designer}/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
};
