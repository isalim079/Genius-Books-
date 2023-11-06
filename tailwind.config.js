/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
            },
            colors: {
                darkBrownShade: "#643D34",
                coffeeColorShade: "#CBA07F",
                blackShade: "#3E3E3D",
                lightCoffeeShade: "#E6D8D0",
                oliveGreenShade: "#716F4C",
            },
        },
    },
    daisyui: {
        themes: [
            "light",
            "dark",
            "cupcake",
            "retro",
            {
                mytheme: {
                    primary: "#FF3811",

                    secondary: "#FFFFFF",

                    accent: "#2aa4ba",

                    neutral: "#1f1a28",

                    "base-100": "#ffffff",

                    info: "#a4cae5",

                    success: "#53ea97",

                    warning: "#927c0c",

                    error: "#ea7b99",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
