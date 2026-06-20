/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        cb: {
          bg:          '#f6f4f0',
          ink:         '#1e2a37',
          muted:       '#57534a',
          faint:       '#8a8478',
          border:      '#ebe6dc',
          card:        '#ffffff',
          linen:       '#ece7dd',
          'linen-deep': '#efe9df',
          accent:      '#2f8f5b',
          'accent-deep': '#246c46',
          panel:       '#1f3b32',
          'panel-deep': '#15291f',
          'panel-card': '#2a4a3f',
          'panel-line': '#38584d',
          'panel-text': '#aaa499',
        },
      },
      fontFamily: {
        sans:      ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        display:   ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        cbRise: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        cbRise: 'cbRise 0.6s ease both',
      },
    },
  },
  plugins: [],
}
