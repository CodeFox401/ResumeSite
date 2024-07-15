const btn = document.querySelector(".btn-toggle-darkmode");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", toggleDarkMode())

function toggleDarkMode()
{
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
          ? "light"
          : "dark";
          document.getElementById('darkmodeIcon').src = 'images/light-mode.png';
      } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
          ? "dark"
          : "light";
          document.getElementById('darkmodeOff') = 'images/dark-mode.png';
      }
      localStorage.setItem("theme", theme);
}