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

document.addEventListener('DOMContentLoaded', function() {
    if (window.particlesJS) {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 1000,
            density: {
              enable: true,
              value_area: 800
            }
          },
          shape: {
               type: 'circle', // Replace 'text' with a built-in shape like 'circle'
          },
          color: {
            value: '#000000'
          },
          opacity: {
            value: 0.8,
            random: true
          },
          size: {
            value: 6,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            repulse: {
              distance: 100
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    } else {
      console.error('Particles.js library not loaded');
    }
  });