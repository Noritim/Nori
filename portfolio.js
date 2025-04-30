document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark_mode');
    const body = document.body;

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply initial theme
    if (savedTheme) {
        body.classList.add(savedTheme + '-theme');
        darkModeToggle.checked = (savedTheme === 'dark');
    } else {
        body.classList.add(systemDark ? 'dark-theme' : 'light-theme');
        darkModeToggle.checked = systemDark;
    }

    // Toggle theme when switch is clicked
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});