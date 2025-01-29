import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			'oswold-font': ['Oswald', 'sans-serif']
		}
	},
	plugins: [containerQueries]
} satisfies Config;
