document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const settingsPanel = document.getElementById("settings-panel");
    const closeSettings = document.getElementById("close-settings");

    menuToggle.addEventListener("click", function () {
        settingsPanel.classList.toggle("open");
    });

    closeSettings.addEventListener("click", function () {
        settingsPanel.classList.remove("open");
    });
});
