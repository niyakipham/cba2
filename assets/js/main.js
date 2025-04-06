// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.navbar__mobile-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav__close');
    
    if (mobileNavToggle && mobileNav) {
      mobileNavToggle.addEventListener('click', () => {
        mobileNav.classList.add('mobile-nav--open');
        document.body.style.overflow = 'hidden';
      });
      
      mobileNavClose.addEventListener('click', () => {
        mobileNav.classList.remove('mobile-nav--open');
        document.body.style.overflow = '';
      });
    }
    
    // Sidebar toggle
    const sidebarToggle = document.querySelector('.sidebar__toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar--open');
      });
    }
    
    // Scroll reveal animations
    const scrollReveal = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: false
    });
    
    scrollReveal.reveal('.hero__content', { delay: 300 });
    scrollReveal.reveal('.btn', { delay: 400, interval: 100 });
    scrollReveal.reveal('.doc-card', { interval: 200 });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.classList.add('navbar--scrolled');
        } else {
          navbar.classList.remove('navbar--scrolled');
        }
      });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile nav if open
          if (mobileNav.classList.contains('mobile-nav--open')) {
            mobileNav.classList.remove('mobile-nav--open');
            document.body.style.overflow = '';
          }
        }
      });
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Doc card hover effect enhancement
    const docCards = document.querySelectorAll('.doc-card');
    
    docCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
    
    // Initialize particle network
    initParticleNetwork();
  });