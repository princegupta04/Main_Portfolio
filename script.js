console.log("Script is running");

// Cache frequently accessed elements
const crossIcon = document.querySelector('.cross');
const hamIcon = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');

// Initial setup
crossIcon.style.display = 'none';

// Toggle sidebar visibility
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle('sidebargo');

    if (sidebar.classList.contains('sidebargo')) {
        // Sidebar is hidden
        crossIcon.style.display = "none";
        hamIcon.style.display = "inline";
    } else {
        // Sidebar is visible
        hamIcon.style.display = "none";
        crossIcon.style.display = "inline";
    }
});
