/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Garanta que as cores básicas estão definidas
        white: '#ffffff',
        black: '#000000',
        gray: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          // ... outras variações de cinza
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          500: '#3b82f6',
          800: '#1e40af',
        },
      },
    },
  },
  plugins: [],
}