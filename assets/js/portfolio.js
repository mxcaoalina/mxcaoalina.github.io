/**
 * Main JavaScript file for Mingxi's portfolio
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize any components
  initNavigation();
  animateHeroSection();
  initProjectCards();
});

// Handle responsive navigation
function initNavigation() {
  const navToggle = document.querySelector('.navbar-toggler');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse) {
        navbarCollapse.classList.toggle('show');
      }
    });
  }
}

// Add subtle animations to the hero section
function animateHeroSection() {
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    // Add a subtle fade-in effect
    heroSection.style.opacity = '0';
    heroSection.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
      heroSection.style.opacity = '1';
    }, 200);
  }
}

// Initialize project card interactions
function initProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    // Add hover effect with shadow change
    card.addEventListener('mouseenter', () => {
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
  });
}

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})


const triggerEl = document.querySelector('#myTab button[data-bs-target="#profile"]')
bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name

const triggerFirstTabEl = document.querySelector('#myTab li:first-child button')
bootstrap.Tab.getInstance(triggerFirstTabEl).show() // Select first tab