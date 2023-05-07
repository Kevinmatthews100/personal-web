/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        stars: 'url("/images/stars.jpg")',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
