module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: ["Inconsolata", "monospace"],
            typography: {
                DEFAULT: {
                    css: {
                        color: "#FFFFFF",
                        h1: {
                            color: "#FFFFFF",
                        },
                        h2: {
                            color: "#FFFFFF",
                        },
                        th: {
                            color: "#FFFFFF",
                        },
                    },
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
