// animations.js
class FloatingOrbs {
    constructor(container) {
      this.container = container || document.body;
      this.orbs = [];
      this.colors = ['rgba(100, 255, 218, 0.5)', 'rgba(94, 120, 255, 0.5)', 'rgba(255, 94, 154, 0.5)'];
      this.init();
    }
    
    init() {
      // Create orbs
      for (let i = 0; i < 5; i++) {
        this.createOrb();
      }
      
      // Animation loop
      this.animate();
    }
    
    createOrb() {
      const orb = document.createElement('div');
      orb.className = 'floating-orb';
      
      // Random properties
      const size = Math.random() * 10 + 5;
      const color = this.colors[Math.floor(Math.random() * this.colors.length)];
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      // Apply styles
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;
      orb.style.background = color;
      orb.style.left = `${x}%`;
      orb.style.top = `${y}%`;
      orb.style.animationDuration = `${duration}s`;
      orb.style.animationDelay = `${delay}s`;
      
      // Store orb reference
      this.orbs.push({
        element: orb,
        x: x,
        y: y,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2
      });
      
      this.container.appendChild(orb);
    }
    
    animate() {
      this.orbs.forEach(orb => {
        // Update position
        orb.x += orb.speedX;
        orb.y += orb.speedY;
        
        // Boundary check
        if (orb.x < 0 || orb.x > 100) orb.speedX *= -1;
        if (orb.y < 0 || orb.y > 100) orb.speedY *= -1;
        
        // Apply new position
        orb.element.style.left = `${orb.x}%`;
        orb.element.style.top = `${orb.y}%`;
      });
      
      requestAnimationFrame(() => this.animate());
    }
  }
  
  // Initialize floating orbs in hero section
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    new FloatingOrbs(heroSection);
  }
  
  // Typewriter effect
  class Typewriter {
    constructor(element, strings, options = {}) {
      this.element = element;
      this.strings = strings;
      this.speed = options.speed || 100;
      this.delay = options.delay || 2000;
      this.loop = options.loop || false;
      this.currentString = 0;
      this.currentChar = 0;
      this.isDeleting = false;
      this.timeout = null;
      this.init();
    }
    
    init() {
      this.type();
    }
    
    type() {
      const fullString = this.strings[this.currentString];
      
      if (this.isDeleting) {
        this.currentChar--;
      } else {
        this.currentChar++;
      }
      
      this.element.textContent = fullString.substring(0, this.currentChar);
      
      let typeSpeed = this.speed;
      
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
      
      if (!this.isDeleting && this.currentChar === fullString.length) {
        typeSpeed = this.delay;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentChar === 0) {
        this.isDeleting = false;
        this.currentString++;
        
        if (this.currentString === this.strings.length) {
          if (this.loop) {
            this.currentString = 0;
          } else {
            return;
          }
        }
      }
      
      this.timeout = setTimeout(() => this.type(), typeSpeed);
    }
    
    destroy() {
      clearTimeout(this.timeout);
    }
  }
  
  // Initialize typewriter if element exists
  const typewriterElement = document.querySelector('.typewriter');
  if (typewriterElement) {
    const strings = JSON.parse(typewriterElement.getAttribute('data-strings'));
    new Typewriter(typewriterElement, strings, { loop: true });
  }