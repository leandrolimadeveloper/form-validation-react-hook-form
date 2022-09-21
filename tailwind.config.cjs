/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,tsx,jsx}',
        './index.html'
    ],
    theme: {
        extend: {
            backgroundImage: {
                backgroundTokyo: "url('/bg-tokyo.jpg')"
            }
        }
    },
    plugins: [],
}