/**
 * Codex Nebula Theme - Main JavaScript File
 *
 * Includes:
 * - Basic Setup & Helpers
 * - Anime.js Animations
 * - Intersection Observer for scroll animations
 * - Mobile Navigation Toggle Logic
 * - Back to Top Button Logic
 * - Optional: Search toggle, Theme switcher, etc.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log("%c🚀 Codex Nebula Activated!", "color: #00ffff; font-size: 1.2em; font-weight: bold;");

  // --- Helper Functions ---
  const throttle = (func, limit) => {
      let inThrottle;
      return function() {
          const args = arguments;
          const context = this;
          if (!inThrottle) {
              func.apply(context, args);
              inThrottle = true;
              setTimeout(() => inThrottle = false, limit);
          }
      }
  };

  const debounce = (func, delay) => {
      let debounceTimer;
      return function() {
          const context = this;
          const args = arguments;
          clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => func.apply(context, args), delay);
      }
  };


  // --- Mobile Navigation Toggle ---
  const navTrigger = document.getElementById('nav-trigger');
  const mainNavLinks = document.getElementById('main-nav-links');

  if (navTrigger && mainNavLinks) {
    console.log('Mobile navigation handler attached.');
    // No specific JS needed if using the checkbox hack `:checked ~ .trigger` in CSS
    // However, you might want JS for accessibility or more complex animations

    // Example: Close menu when a link is clicked (useful for single-page apps or anchor links)
    mainNavLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && navTrigger.checked) {
             // Only close if it's a link click and menu is open
             navTrigger.checked = false; // Uncheck the box to hide menu via CSS
        }
    });

     // Example: Close menu if clicking outside
     document.addEventListener('click', (event) => {
          const header = document.querySelector('.site-header'); // Find the header element
          if (navTrigger.checked && header && !header.contains(event.target)) {
                // If menu is open and click is outside the header, close it
              navTrigger.checked = false;
          }
      });

  } else {
    console.warn('Mobile navigation elements not found (nav-trigger or main-nav-links).');
  }


   // --- Back to Top Button ---
   const backToTopButton = document.getElementById('back-to-top');
   if (backToTopButton) {
        console.log('Back to top button logic attached.');
        const showButtonThreshold = 300; // Pixels scrolled down to show button

        const toggleBackToTopVisibility = () => {
            if (window.scrollY > showButtonThreshold) {
                 backToTopButton.classList.add('visible');
            } else {
                 backToTopButton.classList.remove('visible');
             }
        };

        window.addEventListener('scroll', throttle(toggleBackToTopVisibility, 200)); // Throttle scroll checks

         backToTopButton.addEventListener('click', () => {
              window.scrollTo({
                 top: 0,
                 behavior: 'smooth' // Smooth scroll to top
             });
        });

       // Initial check in case page loads already scrolled down
        toggleBackToTopVisibility();
    } else {
        console.warn('Back to top button element not found.');
    }


   // --- Anime.js Animations ---
    if (typeof anime === 'undefined') {
         console.error('Anime.js not found! Ensure it is loaded before main.js.');
         return; // Stop JS execution if anime.js is missing
     }

     console.log(`Anime.js version ${anime.version} loaded.`);


     // --- Animation 1: Staggered Fade-in/Slide-up on Load ---
     const elementsToAnimateOnLoad = document.querySelectorAll('.animate-on-load');
      if (elementsToAnimateOnLoad.length > 0) {
          console.log(`Animating ${elementsToAnimateOnLoad.length} elements on load...`);
          anime({
              targets: '.animate-on-load',
              translateY: [30, 0], // Slide up from 30px below
              opacity: [0, 1],
              scale: [0.98, 1], // Slight scale up
              duration: 800,
              delay: anime.stagger(100, { start: 200 }), // Stagger animation by 100ms, start after 200ms
              easing: 'easeOutExpo'
            });
      }


    // --- Animation 2: Elements Appearing on Scroll using Intersection Observer ---
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the viewport
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
             // Find the target element, check if it has the class and hasn't been animated yet
             const targetElement = entry.target;
            if (entry.isIntersecting && !targetElement.classList.contains('is-visible')) {
                 console.log(`Animating element on scroll:`, targetElement);

                // Determine animation type based on class or data attributes (example)
                let animationConfig = {
                    targets: targetElement,
                    opacity: [0, 1],
                    translateY: [40, 0], // Default slide up
                     scale: [0.95, 1],
                    duration: 600,
                     // Get delay from data attribute or default to 0
                    delay: parseInt(targetElement.dataset.delay) || 0,
                    easing: 'easeOutCubic'
                };

                // Customize animation based on element type or other classes if needed
                 if (targetElement.classList.contains('document-card')) {
                     // Slightly different animation for cards maybe
                    animationConfig.duration = 700;
                    animationConfig.easing = 'easeOutExpo';
                }
                // Add more customizations here...


                 // Run the animation
                anime(animationConfig);

                 // Mark the element as visible to prevent re-animating
                targetElement.classList.add('is-visible');

                 // Optional: Unobserve the element after animating
                 // observer.unobserve(targetElement);
            }
            // Optional: Add logic for when element scrolls out of view if needed
            // else if (!entry.isIntersecting && targetElement.classList.contains('is-visible')) {
            //     targetElement.classList.remove('is-visible'); // Reset for re-animation?
            //     // Could reset opacity/transform here if re-animation is desired
            // }
        });
     };

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToAnimateOnScroll = document.querySelectorAll('.animate-on-scroll');
    if (elementsToAnimateOnScroll.length > 0) {
        console.log(`Observing ${elementsToAnimateOnScroll.length} elements for scroll animations.`);
         elementsToAnimateOnScroll.forEach(el => {
             scrollObserver.observe(el);
         });
     } else {
        console.log('No elements found to animate on scroll.');
     }


   // --- Animation 3: Button Hover Effects (Example - use CSS for simple cases) ---
    // CSS hover effects are usually sufficient and more performant.
    // Use JS/Anime.js for more complex chained or physics-based animations on hover.
    document.querySelectorAll('.btn').forEach(button => {
       // Example: Add a slight particle burst on click (Requires a particle library or custom canvas)
        button.addEventListener('click', (e) => {
            // Placeholder for complex interaction effect
           console.log('Button clicked:', button.textContent);
            // Simple scale feedback via JS
            anime({
                 targets: button,
                scale: [1, 0.95, 1.05, 1], // Quick pulse effect
                duration: 300,
                easing: 'easeInOutSine'
            });
       });
   });

     // --- Add more custom JS logic and animations as needed ---
      // Example: Glitch effect activation (might need more complex timing control than CSS)
     // Example: Theme switcher logic
     // Example: Search functionality JS


     console.log("%c✨ Codex Nebula JS Initialized Successfully!", "color: #00ffaa;");

}); // End DOMContentLoaded
