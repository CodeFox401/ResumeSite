document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-toggle-darkmode');
    const themeIcon = document.getElementById('theme-toggle-img');
    const lightModeIconSrc = 'images/light-mode.png';
    const darkModeIconSrc = 'images/dark-mode.png';

    function toggleDarkMode() {
        if (themeIcon.src.endsWith(lightModeIconSrc)) {
            themeIcon.src = darkModeIconSrc;
        } else {
            themeIcon.src = lightModeIconSrc;
        }
    }

    // Add the event listener with the function reference
    btn.addEventListener('click', toggleDarkMode);
});
