/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                '2xl': '1440px',
            },
            spacing: {
                pageWrapper: 'calc(50% - 43.75rem)',
            },
            fontSize: {
                '1.5xs': ['0.8125rem', '1.125rem'],
            },
        },
    },
    plugins: [],
}
