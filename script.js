// Select the "Back to Top" button
const scrollUpButton = document.getElementById("btn-back-to-top");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function() {
    toggleScrollUpButton();
};

function toggleScrollUpButton() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollUpButton.style.display = "block";
    } else {
        scrollUpButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
scrollUpButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
