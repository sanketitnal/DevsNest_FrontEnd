module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			headerColor: "#0D1521",
		}),
		fontFamily: {
			heading: "'PT Sans', sans-serif",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
