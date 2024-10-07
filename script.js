document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase().trim();
    const posts = document.querySelectorAll('.post');
    const resultsContainer = document.getElementById('resultsContainer');
    const searchResultsSection = document.getElementById('searchResults');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (query === '') {
        // Hide search results section if search query is empty
        searchResultsSection.classList.add('d-none');
        return;
    }

    let resultsFound = false;

    // Loop through all blog posts
    posts.forEach(function (post) {
        const title = post.querySelector('h2').textContent.toLowerCase();
        const description = post.querySelector('p').textContent.toLowerCase();

        // Check if the query is in the title or description
        if (title.includes(query) || description.includes(query)) {
            // Clone the post and append it to the results container
            const clone = post.cloneNode(true);
            resultsContainer.appendChild(clone);
            resultsFound = true;
        }
    });

    if (resultsFound) {
        // Show search results section
        searchResultsSection.classList.remove('d-none');
    } else {
        // Hide search results section if no results found
        searchResultsSection.classList.add('d-none');
    }
});
