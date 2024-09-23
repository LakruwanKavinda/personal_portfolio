// Function to scroll to the top of the page
function scrollToTop() {
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 100); // Add a slight delay to ensure it executes after navigation
}

// Function to open links in a new tab
function openLink(url) {
    window.open(url, '_blank');  // Opens link in a new tab
}
