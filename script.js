// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active Navigation Link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            contact: document.getElementById('contact').value,
            subject: document.getElementById('subject').value
        };
        
        // Store in localStorage (simple solution)
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts.push({
            ...formData,
            date: new Date().toISOString()
        });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        // Show success message
        alert('Merci pour votre message ! Je vous contacterai bientôt.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this to a server
        console.log('Form submitted:', formData);
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!e.target.closest('nav')) {
            navLinks.classList.remove('active');
        }
    }
});

// Testimonials carousel
const initTestimonialsCarousel = () => {
    const grid = document.querySelector('.testimonial-grid');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    if (!grid || !prevBtn || !nextBtn) return;
    
    const testimonials = grid.querySelectorAll('.testimonial');
    let currentIndex = 0;
    let testimonialsPerView = 3;
    
    // Determine number of testimonials to show based on screen size
    const updateTestimonialsPerView = () => {
        if (window.innerWidth <= 768) {
            testimonialsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            testimonialsPerView = 2;
        } else {
            testimonialsPerView = 3;
        }
        showTestimonials();
    };
    
    const showTestimonials = () => {
        testimonials.forEach((testimonial, index) => {
            if (index >= currentIndex && index < currentIndex + testimonialsPerView) {
                testimonial.style.display = 'block';
            } else {
                testimonial.style.display = 'none';
            }
        });
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= testimonials.length - testimonialsPerView;
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
        prevBtn.style.cursor = prevBtn.disabled ? 'not-allowed' : 'pointer';
        nextBtn.style.cursor = nextBtn.disabled ? 'not-allowed' : 'pointer';
    };
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showTestimonials();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < testimonials.length - testimonialsPerView) {
            currentIndex++;
            showTestimonials();
        }
    });
    
    // Initialize
    updateTestimonialsPerView();
    
    // Update on window resize
    window.addEventListener('resize', updateTestimonialsPerView);
};

// Initialize carousel when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTestimonialsCarousel);
} else {
    initTestimonialsCarousel();
}

// Animation on scroll (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
