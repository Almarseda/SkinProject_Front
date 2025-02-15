/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      'custom': '-5px 20px 10px rgba(0, 0, 0, 0.25)',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

