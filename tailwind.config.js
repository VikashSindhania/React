/** @type {import('tailwindcss').Config} */
module.exports = {
  //content:[],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", //We are saying Tailwind configuration that any where we are using Tailwind so we define the file extension where tailwind understand that i have to show my functionlity in this file.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
