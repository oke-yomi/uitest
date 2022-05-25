module.exports = {
	// content: ["./src/**/*.{js,jsx,ts,tsx}"],
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#549A9A",
				transparent: "transparent",
				txtGray: "#AAA8A8",
				txtGrayBold: "#989898",
				bgWhite: "#F5F5F5",
				txtWhite: "#ffffff",
				cardBg: 'rgba(86, 177, 160, 0.2)',
			},
			gridTemplateRows: {
				10: "0.8fr 1fr 1.2fr",
			},
			boxShadow: {
				"3xl": "0px 2px 10px rgba(182, 182, 182, 0.25)",
				"4xl": "2px 0px 4px rgba(158, 158, 158, 0.4)",
			},
		},
	},
	plugins: [],
};
