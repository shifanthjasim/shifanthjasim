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

// Get all images in the gallery
const images = document.querySelectorAll('.gallery img');

// Function to check the position of the images
function checkScroll() {
    images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isInViewport) {
            img.classList.add('zoom'); // Add zoom class when in viewport
        } else {
            img.classList.remove('zoom'); // Remove zoom class when out of viewport
        }
    });
}

// Listen to the scroll event
window.addEventListener('scroll', checkScroll);
