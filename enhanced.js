
// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Fade animation on load
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});

// Simple EmailJS placeholder setup
function sendEmail() {
    alert("Connect EmailJS to enable contact form.");
}
