// Smooth Scroll Animation for Hero Section CTA
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#wallpapers').scrollIntoView({
        behavior: 'smooth'
    });
});

// GSAP Animation for Hero Section Title and Tagline
gsap.from('.hero-title', { opacity: 0, y: -50, duration: 1, ease: 'power2.out', delay: 0.5 });
gsap.from('.hero-tagline', { opacity: 0, y: 50, duration: 1, ease: 'power2.out', delay: 0.8 });
gsap.from('.btn-primary', { opacity: 0, scale: 0.8, duration: 1, ease: 'power2.out', delay: 1.1 });
