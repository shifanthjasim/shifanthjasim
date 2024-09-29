// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

// Show the button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Check Access Function
function checkAccess(url) {
    // Check if the URL is accessible
    fetch(url)
        .then(response => {
            if (response.ok) {
                // Redirect if accessible
                window.location.href = url; 
            } else {
                // Alert if access is denied
                alert('Access Denied: You do not have permission to view this page.'); 
            }
        })
        .catch(() => {
            // Alert for fetch error
            alert('Access Denied: You do not have permission to view this page.'); 
        });
}

// Dark Mode Toggle Functionality
const header = document.querySelector('header');
const toggleButton = document.getElementById('dark-mode-toggle');

document.getElementById("client-login").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default anchor click behavior

    // Display the pop-up message
    alert("Access Denied. The user has to be in the United States to log in. VPN has been blocked.");
});
