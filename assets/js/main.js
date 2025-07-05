/*=============== MENU ===============*/

/* Menu show */

/* Menu hidden */

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== REMOVE MENU MOBILE ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

/*=============== CALCULATE BMI ===============*/

// ========== ADVANCED UI INTERACTIVITY ========== //
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // 1. Dark Mode Toggle
    const darkModeBtn = document.createElement('button');
    darkModeBtn.className = 'dark-mode-toggle';
    darkModeBtn.title = 'Toggle dark mode';
    darkModeBtn.innerHTML = '🌙';
    document.body.appendChild(darkModeBtn);

    function setDarkMode(enabled) {
        if (enabled) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
            darkModeBtn.innerHTML = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
            darkModeBtn.innerHTML = '🌙';
        }
    }
    // Load dark mode preference
    setDarkMode(localStorage.getItem('darkMode') === 'true');
    darkModeBtn.addEventListener('click', function() {
        setDarkMode(!document.body.classList.contains('dark-mode'));
    });

    // 2. Floating Scroll-to-Top Button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.title = 'Scroll to top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.display = 'none';
    document.body.appendChild(scrollBtn);
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // 3. Section Entrance Animation (fade/slide-in)
    const animatedSections = document.querySelectorAll('section, .hero, .about-gymat, .testimonials, .trainers, .contact');
    function revealSections() {
        animatedSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                section.classList.add('animated-section');
            }
        });
    }
    window.addEventListener('scroll', revealSections);
    revealSections();

    // 4. Add glassmorphism, 3D, and animated-border classes
    // Hero, navbar, cards, forms
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('glass');
    const nav = document.querySelector('.navbar');
    if (nav) nav.classList.add('glass');
    document.querySelectorAll('.testimonial-card, .trainer-card, .contact-form').forEach(el => {
        el.classList.add('glass', 'card-3d', 'animated-border');
    });
});
