/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				display: ["var(--font-display)"],
				text: ["var(--font-text)"],
			},
			colors: {
				primary: "#BF83B3",
				secondary: "#917145",
				bgLight: "#f5f5f5",
				bgDark: "#262626",
				textLight: "#323232",
				textDark: "#eaeaea",
			}
		}
	},
	plugins: []
}
