module.exports = {
   content: [
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
   ],
   theme: {
      extend: {
         container: {
            center: true,
            padding: "2rem",
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
