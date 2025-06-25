document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    closeMenu.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Counter Animation for About Stats
    const stats = document.querySelectorAll('.stat-number');
    const animateStats = () => {
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-count');
            let count = 0;
            const duration = 2000;
            const step = target / (duration / 100);
            const updateCount = setInterval(() => {
                count += step;
                if (count >= target) {
                    clearInterval(updateCount);
                    stat.textContent = target;
                } else {
                    stat.textContent = Math.floor(count);
                }
            }, 100);
        });
    };

    // Trigger Stats Animation when in view
    const aboutSection = document.querySelector('.about');
    const handleScroll = () => {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
            animateStats();
            window.removeEventListener('scroll', handleScroll);
        }
    };
    window.addEventListener('scroll', handleScroll);

    // Current Year in Footer
    const currentYear = document.getElementById('current-year');
    currentYear.textContent = new Date().getFullYear();
});