/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          50: '#F8EEDF',   // Off-white/very light cream
          100: '#F8EEDF',  // Off-white/very light cream
          200: '#F8EEDF',  // Off-white/very light cream
          300: '#F8EEDF',  // Off-white/very light cream
          400: '#F8EEDF',  // Off-white/very light cream
          500: '#F8EEDF',  // Off-white/very light cream
          600: '#F8EEDF',  // Off-white/very light cream
          700: '#F8EEDF',  // Off-white/very light cream
          800: '#F8EEDF',  // Off-white/very light cream
          900: '#F8EEDF',  // Off-white/very light cream
        },
        cream: {
          50: '#F8EEDF',   // Off-white/very light cream
          100: '#F8EEDF',  // Off-white/very light cream
          200: '#F8EEDF',  // Off-white/very light cream
          300: '#F8EEDF',  // Off-white/very light cream
          400: '#F8EEDF',  // Off-white/very light cream
          500: '#F8EEDF',  // Off-white/very light cream
          600: '#F8EEDF',  // Off-white/very light cream
          700: '#F8EEDF',  // Off-white/very light cream
          800: '#F8EEDF',  // Off-white/very light cream
          900: '#F8EEDF',  // Off-white/very light cream
        },
        maroon: {
          50: '#8B0000',   // Dark red/maroon
          100: '#8B0000',  // Dark red/maroon
          200: '#8B0000',  // Dark red/maroon
          300: '#8B0000',  // Dark red/maroon
          400: '#8B0000',  // Dark red/maroon
          500: '#8B0000',  // Dark red/maroon
          600: '#8B0000',  // Dark red/maroon
          700: '#8B0000',  // Dark red/maroon
          800: '#8B0000',  // Dark red/maroon
          900: '#8B0000',  // Dark red/maroon
        },
        dark: {
          50: '#000000',   // Black
          100: '#000000',  // Black
          200: '#000000',  // Black
          300: '#000000',  // Black
          400: '#000000',  // Black
          500: '#000000',  // Black
          600: '#000000',  // Black
          700: '#000000',  // Black
          800: '#000000',  // Black
          900: '#000000',  // Black
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 