/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'custome-1': '5px 5px 5px #55311C',
            },
            colors: {
                'coolars-color-1': '#55311C',
                'coolars-color-2': '#653A22',
                'coolars-color-3': '#754328',
                'coolars-color-4': '#9E745C',
                'coolars-color-5': '#C7A58F',
                'coolars-color-6': '#DDC6B5',
                'coolars-color-7': '#F3E6DA',
            },
        },
    },
    plugins: [],
};
