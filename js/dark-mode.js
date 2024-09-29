const toggle = document.getElementById('dark-mode-toggle');
let isDarkMode = false;

// Function to toggle dark mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.querySelector('header').classList.toggle('dark-mode');
  document.querySelector('footer').classList.toggle('dark-mode');
  document.querySelectorAll('section').forEach(section => {
    section.classList.toggle('dark-mode');
  });

  isDarkMode = !isDarkMode;
  toggle.innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Back to Top Button functionality
const scrollTopButton = document.getElementById('scroll-top-btn');
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
