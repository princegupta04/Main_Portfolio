console.log("Script is running");

const crossIcon = document.querySelector('.cross');
const hamIcon = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');


crossIcon.style.display = 'none';


hamburger.addEventListener("click", () => {
    sidebar.classList.toggle('sidebargo');

    if (sidebar.classList.contains('sidebargo')) {
        
        crossIcon.style.display = "none";
        hamIcon.style.display = "inline";
    } else {
        
        hamIcon.style.display = "none";
        crossIcon.style.display = "inline";
    }
});
