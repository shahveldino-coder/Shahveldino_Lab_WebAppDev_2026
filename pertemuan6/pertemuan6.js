const themes = {
    light: {
        bg: "#f4f4f4",
        color: "#333",
        btn: {
            bg: "#333",
            color: "#f4f4f4"
        }
    },

    dark: {
        bg: "#333",
        color: "#f4f4f4",
        btn: {
            bg: "#f4f4f4",
            color: "#333"
        }
    }
};

let currentTheme = 0;

const btn = document.getElementById("theme-toggle");

btn.addEventListener("click", () => {

    currentTheme = (currentTheme + 1) % Object.keys(themes).length;

    const themeName = Object.keys(themes)[currentTheme];
    const theme = themes[themeName];

    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.color;

    btn.style.backgroundColor = theme.btn.bg;
    btn.style.color = theme.btn.color;
});