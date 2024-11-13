// Navigation Functionality:

const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

// Hamburger Menu Toggle:
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Changed from 'nav-active' to 'active'
    hamburger.classList.toggle('active');
});
// Close menu when clicking a link:
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); // Changed from 'nav-active' to 'active'
        hamburger.classList.remove('active');
    });
});
// Navbar scroll effect:
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Active nav link on scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Skills animation
const skillBars = document.querySelectorAll('.progress');
const skillsSection = document.querySelector('.skills');

const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
};

// Animate skills when scrolled into view
const observeSkills = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observeSkills.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observeSkills.observe(skillsSection);

// Portfolio filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            // Show all items if 'all' is selected, otherwise filter by category
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.opacity = '0';
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);
        
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formObject);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scroll for navigation links
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

// Add animation classes for scroll reveal
const observerOptions = {
    threshold: 0.25,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.about-content, .skill-category, .portfolio-item, .contact-container')
    .forEach(element => observer.observe(element));

// Add floating animation to hero section
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    let floatY = 0;
    let floatDirection = 1;

    function animateHero() {
        floatY += 0.1 * floatDirection;
        
        if (floatY > 10) floatDirection = -1;
        if (floatY < 0) floatDirection = 1;
        
        heroContent.style.transform = `translateY(${floatY}px)`;
        requestAnimationFrame(animateHero);
    }

    animateHero();
}

// Dynamic typing effect for hero section
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typing animation when the page loads
    window.addEventListener('load', typeWriter);
}

// Add this to style element for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .portfolio-item {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease-out;
    }

    .in-view {
        opacity: 1;
        transform: translateY(0);
    }

    .portfolio-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        padding: 20px;
        text-align: center;
    }

    .portfolio-overlay h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: white;
    }

    .portfolio-overlay p {
        margin-bottom: 15px;
        color: rgba(255, 255, 255, 0.9);
    }

    .portfolio-links {
        display: flex;
        gap: 10px;
    }

    .portfolio-links .btn {
        padding: 8px 20px;
        font-size: 0.9rem;
        background: white;
        color: var(--primary-color);
    }

    .portfolio-links .btn:hover {
        background: var(--primary-color);
        color: white;
    }
`;
document.head.appendChild(style);