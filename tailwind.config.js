/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
		screens: {
			sm: '420px',
			md: '768px',
			xl: '1440px',
			smOnly: { max: '767.98px' },
			mdOnly: { min: '768px', max: '1279.98px' },
			notXl: { max: '1439.98px' },
		  },
	  
		fontFamily: {
			inter: ['"Inter",sans-serif'],
			sans: [
				'"Manrope", sans-serif',
				{
					fontFeatureSettings: '"cv11", "ss01"',
					fontVariationSettings: '"opsz" 32',
				},
			],
		},

		extend: {
			colors: {
				blue: "#3470FF",
				darckBlue: "#0B44CD",
				input: "#F7F7FB",
        darck:" #121417"
			},
		},
	},

	plugins: [],
};
