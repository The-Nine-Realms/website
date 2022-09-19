const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type"), require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/line-clamp'),

    function ({ addComponents, theme }) {
			addComponents({
				'.container': {
					maxWidth: '40rem',
					marginLeft: 'auto',
					marginRight: 'auto',
					paddingLeft: theme('spacing.4'),
					paddingRight: theme('spacing.4'),
					'@screen md': { maxWidth: '50rem' },
					'@screen lg': { maxWidth: '62rem' },
					'@screen xl': { maxWidth: '80rem' },
					'@screen 2xl': { maxWidth: '90rem' },
				},
				'.head-md': {
					fontFamily: theme('fontFamily.display'),
					fontSize: theme('fontSize.xl'),
					letterSpacing: -0.5,
					lineHeight: 1.2,
					fontWeight: 'bold',
				},
				'.body-md': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.body'),
					lineHeight: 1.3,
				},
			})
		},
  ], 
};
