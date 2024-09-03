document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-toggle-darkmode');
    const themeIcon = document.getElementById('theme-toggle-img');
    const lightModeIconSrc = 'images/light-mode.png';
    const darkModeIconSrc = 'images/dark-mode.png';
    const lightModeLink = document.getElementById('light-mode');
    const darkModeLink = document.getElementById('dark-mode');

    function toggleDarkMode() {
        if (darkModeLink.disabled) {
            lightModeLink.disabled = true;
            darkModeLink.disabled = false;
            themeIcon.src = darkModeIconSrc;
        } else {
            lightModeLink.disabled = false;
            darkModeLink.disabled = true;
            themeIcon.src = lightModeIconSrc;
        }
    }

    // Add the event listener with the function reference
    btn.addEventListener('click', toggleDarkMode);
});
