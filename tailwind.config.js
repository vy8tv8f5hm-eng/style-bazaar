/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cairo: "'Cairo', sans-serif",
        tajawal: "'Tajawal', sans-serif",
      },
      colors: {
        'sb-bg': '#FBF6F1',
        'sb-surface': '#FFFFFF',
        'sb-primary': '#6E2A3C',
        'sb-primary-dark': '#4E1D2A',
        'sb-gold': '#B68A4E',
        'sb-gold-soft': '#EFE1CB',
        'sb-ink': '#2A2224',
        'sb-muted': '#93807A',
        'sb-line': '#EDE2D8',
        'sb-sage': '#5C6B54',
      },
    },
  },
  plugins: [],
};
