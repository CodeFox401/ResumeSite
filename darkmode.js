document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-toggle-darkmode');
    const lightModeLink = document.getElementById('light-mode');
    const darkModeLink = document.getElementById('dark-mode');
    const themeIcon = document.getElementById('theme-toggle-img');
    const lightModeIconSrc = 'images/light-mode.png'; // Ensure path is correct
    const darkModeIconSrc = 'images/dark-mode.png'; // Ensure path is correct

    function toggleDarkMode() {
        if (darkModeLink.disabled) {
            darkModeLink.disabled = false;
            lightModeLink.disabled = true;
            document.body.classList.add('dark-mode');
            themeIcon.src = darkModeIconSrc;
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeLink.disabled = true;
            lightModeLink.disabled = false;
            document.body.classList.remove('dark-mode');
            themeIcon.src = lightModeIconSrc;
            localStorage.setItem('theme', 'light');
        }
    }

    btn.addEventListener('click', toggleDarkMode);

    // Set initial mode based on user preference or system setting
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        darkModeLink.disabled = false;
        lightModeLink.disabled = true;
        document.body.classList.add('dark-mode');
        themeIcon.src = darkModeIconSrc;
    } else {
        darkModeLink.disabled = true;
        lightModeLink.disabled = false;
        document.body.classList.remove('dark-mode');
        themeIcon.src = lightModeIconSrc;
    }
});
