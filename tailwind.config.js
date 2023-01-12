/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		extend: {
			fontFamily: {
				sans: "Poppins, sans-serif",
				roboto: "Roboto, sans-serif",
			},
			colors: {
				blue: {
					500: "#1E86FF",
					800: "#334680",
					900: "#282538",
				},
				gray: {
					300: "#B9BDCF",
				},
				stone: {
					100: "#F6F7FB",
				},
			},
		},
	},
	plugins: [],
};
