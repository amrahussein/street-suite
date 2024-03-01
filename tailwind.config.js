/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				green: '#118F4B',
				orange: '#D94111',
				accent: '#53ACFF',
			},
		},
	},
	plugins: [ require('tailwind-scrollbar')],
}
