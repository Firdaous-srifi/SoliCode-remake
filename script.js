// Number Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // Total animation duration in ms
        const increment = target / (duration / 16); // 16ms is roughly one frame at 60fps
        
        let currentCount = 0;
        
        const updateCounter = () => {
            if (currentCount < target) {
                currentCount += increment;
                counter.textContent = Math.round(currentCount);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Scroll-triggered animation
function handleScrollAnimation() {
    const section = document.querySelector('.about-programs');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
        animateCounters();
        // Remove event listener after animation to prevent repeated triggers
        window.removeEventListener('scroll', handleScrollAnimation);
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimation);