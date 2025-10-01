import { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf5ff',
          100: '#d7e7ff',
          200: '#aaccff',
          300: '#7cb1ff',
          400: '#4e95ff',
          500: '#1f79ff',
          600: '#165fcc',
          700: '#104899',
          800: '#0a3166',
          900: '#061d3d'
        },
        accent: {
          100: '#eaf9ff',
          200: '#bff0ff',
          300: '#8ae5ff',
          400: '#55dbff',
          500: '#1fd0ff',
          600: '#17a6cc',
          700: '#117d99',
          800: '#0b5366',
          900: '#07313d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Orbitron', 'ui-sans-serif']
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}

export default config
