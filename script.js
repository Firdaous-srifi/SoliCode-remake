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
        "particles": {
          "number": {
            "value": 120, // Number of particles
            "density": {
              "enable": true,
              "value_area": 800 // Area where particles are spread
            }
          },
          "color": {
            "value": "#ffffff" // Particle color
          },
          "shape": {
            "type": "circle", // Shape of particles
            "stroke": {
              "width": 0,
              "color": "#000000"
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150, // Distance for linking particles
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6, // Speed of particle movement
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse" // Interaction on hover
            },
            "onclick": {
              "enable": true,
              "mode": "push" // Add particles on click
            },
            "resize": true
          },
          "modes": {
            "repulse": {
              "distance": 100,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            }
          }
        },
        "retina_detect": true
      });
    } else {
      console.error('Particles.js library not loaded');
    }
  });


  document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const solicodeLogo = document.querySelector('.logo-solicode');
    const originalSolicodeSrc = solicodeLogo.src;
    const scrollSolicodeSrc = solicodeLogo.getAttribute('data-scroll-src');
    
    // Store the original logo's height and width
    const originalHeight = solicodeLogo.offsetHeight;
    const originalWidth = solicodeLogo.offsetWidth;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Add scrolled class to header
            header.classList.add('scrolled');

            // Change only Solicode logo source
            solicodeLogo.src = scrollSolicodeSrc;
            
            // Ensure the new logo maintains the original size
            solicodeLogo.style.height = `$50px`;
            solicodeLogo.style.width = `$50px`;
        } else {
            // Remove scrolled class from header
            header.classList.remove('scrolled');

            // Revert Solicode logo to original source
            solicodeLogo.src = originalSolicodeSrc;
            
            // Remove explicit sizing
            solicodeLogo.style.height = '';
            solicodeLogo.style.width = '';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const videoThumbnail = document.getElementById('videoThumbnail');
  const playButton = document.getElementById('playButton');
  const videoModal = document.getElementById('videoModal');
  const closeModal = document.getElementById('closeModal');
  const youtubeVideo = document.getElementById('youtubeVideo');

  const youtubeVideoId = '-Qu_DhpQmWU'; // Replace with your YouTube video ID

  // Open modal when thumbnail or play button is clicked
  function openModal() {
      videoModal.style.display = 'flex';
      youtubeVideo.src = `https://www.youtube.com/watch?v=-Qu_DhpQmWU&ab_channel=2MTV`;
  }

  // Close modal and stop video
  function closeModalAndVideo() {
      videoModal.style.display = 'none';
      youtubeVideo.src = ''; // Clear the source to stop the video
  }

  // Event listeners
  playButton.addEventListener('click', openModal);
  videoThumbnail.addEventListener('click', openModal);
  closeModal.addEventListener('click', closeModalAndVideo);

  // Close modal if clicked outside of video
  videoModal.addEventListener('click', (event) => {
      if (event.target === videoModal) {
          closeModalAndVideo();
      }
  });
});


function duplicateCards() {
  const container = document.querySelector('.activities-container');
  const cards = container.querySelectorAll('.activity-card');
  
  // Clone all cards
  cards.forEach(card => {
      const clonedCard = card.cloneNode(true);
      container.appendChild(clonedCard);
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', duplicateCards);
 