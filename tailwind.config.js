/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'mbsc': '200px'
            },
            fontSize: {
                sb: '0.95rem'
            },
            borderWidth: {
                1: '1px'
            },
            top: {
                15: '15px'
            },
            transitionDuration: {
                '50': '50ms',
                '75': '75ms'
            },
            blur: {
                xs: '2px'
            }
        },
    },
    plugins: [],
}

