const darkMode = document.getElementById("darkMode");
const lightMode = document.getElementById("lightMode");

const currentMode = localStorage.getItem("theme");

if (currentMode === "dark") {
    document.body.classList.add("dark");
}

darkMode.addEventListener("click", () => {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
});

lightMode.addEventListener("click", () => {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
});