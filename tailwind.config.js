module.exports = {
	content: ['index.html', './public/**/*.html', './src/**/*.{js,svelte}'],
	safelist: [
		'opacity-40',
		'border-b-4',
		'bg-gray-100',
		'bg-blue-500',
		'bg-blue-700',
		'bg-red-500',
		'bg-green-500',
		'from-gray-300',
		'from-blue-300',
		'from-yellow-300',
		'from-green-300',
		'from-red-300',
		'to-gray-200',
		'to-blue-200',
		'to-yellow-200',
		'to-green-200',
		'to-red-200',
		'justify-evenly',
		'hover:bg-blue-700',
		'hover:bg-blue-800',
		'hover:bg-red-700',
		'hover:bg-green-700',
		'disabled:bg-gray-400',
		'bg-success/80',
		'bg-warning/80',
		'bg-error/80',
	], // If you add a class but it never shows up in the build, add it here
	theme: {
		extend: {
			colors: {
				'blue-eths': '#1a2741',
				'orange-eths': '#c34614',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		logs: false,
		themes:
		{
			'light': {
				'primary': '#D2DAEE',
				'primary-focus': '#C34614',
				'base-100': '#ffffff',
				'base-200': '#ffffff',
				'base-300': '#d1d5db',
				'base-content': '#1f2937',
			}
		}
	},
};
