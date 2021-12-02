module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					drib1: "#f8f7f1",
					drib2: {
						DEFAULT: "#ebf2eb",
						500: "#bed5be",
						600: "#a2baa2",
					},
					darkest: "#1f2d3d",
					dark: "#3c4858",
					DEFAULT: "#c0ccda",
					light: "#e0e6ed",
					lightest: "#f9fafc",
				},
			},
			boxShadow: {
				cust1: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
				cust2: "0 1px 2px 0 rgb(0 0 0 / 10%)",
			},
			borderWidth: {
				1: "1.5px",
			},
			minWidth: {
				0: "0",
				24: "6rem",
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
			},
			borderRadius: {
				50: "50%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
