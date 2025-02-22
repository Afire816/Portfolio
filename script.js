// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
    scrollTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will respond shortly.');
    this.reset();
});

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Intersection Observer for animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Animate elements on scroll
document.querySelectorAll('.skill, .project-card, .about-content').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Mobile menu toggle (can be expanded later)
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 100 ? 
        'rgba(51, 51, 51, 0.95)' : 
        'rgba(51, 51, 51, 0.95)'; // Adjust as needed
});