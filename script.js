// Smooth Scroll Animation for Hero Section CTA
// This will trigger smooth scrolling to the wallpaper section when clicking the 'View Wallpapers' button (btn-primary)
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    // Scroll to the wallpapers section (you can replace '#wallpapers' with the actual ID of the section)
    document.querySelector('#categories').scrollIntoView({
        behavior: 'smooth'
    });
});

// GSAP Animation for Hero Section Title, Tagline, and Button
// Animation for the hero title: Fade in and slide up
gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1, ease: 'power2.out', delay: 0.5 });
// Animation for the hero tagline: Fade in and slide down
gsap.from('.hero-tagline', { opacity: 0, y: 50, duration: 1, ease: 'power2.out', delay: 0.8 });
// Animation for the primary button: Fade in and scale up
gsap.from('.btn-primary', { opacity: 0, scale: 0.8, duration: 1, ease: 'power2.out', delay: 1.1 });

// Smooth Scroll to Category Section (for category pages like Trending, Latest, etc.)
// Assuming each page has a section ID like 'trending-wallpapers', 'latest-wallpapers', etc.
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Get the target category section by its ID (e.g. '#trending-wallpapers')
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Additional GSAP Animations for Category Page Title and Content (if any)
document.querySelectorAll('.category-title').forEach(title => {
    gsap.from(title, { opacity: 0, y: 50, duration: 1, ease: 'power2.out', delay: 0.5 });
});

// If there's a need to animate the grid items in the category page
document.querySelectorAll('.wallpaper-item').forEach((item, index) => {
    gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3 * index
    });
});
