import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				default: ['var(--comfortaa)']
			},
			colors: {
				purple: {
					951: 'rgba(79, 70, 229, 1)',
				},
				gray: {
					950: 'hsla(0, 0%, 100%, 0.7);',
					951: 'hsla(0, 0%, 100%, 0.4);',
					952: '#373b64',
				},
			},
			backgroundImage: {
				gradient: "url('/static/mesh-gradient.png')",
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
