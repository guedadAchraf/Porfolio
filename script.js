document.addEventListener('DOMContentLoaded', () => {
    // Performance optimizations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('lazy-load')) {
                    const img = entry.target.querySelector('img');
                    if (img && img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    // Shared scroll timeout variable
    let scrollTimeout;
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50;
    const scrollTop = document.querySelector('.scroll-top');

    // Combined scroll event handler
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }

        scrollTimeout = window.requestAnimationFrame(() => {
            const currentScrollTop = window.pageYOffset;
            
            // Navbar hide/show logic
            if (Math.abs(lastScrollTop - currentScrollTop) > scrollThreshold) {
                if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                    navbar.classList.add('navbar-hidden');
                } else {
                    navbar.classList.remove('navbar-hidden');
                }
                lastScrollTop = currentScrollTop;
            }
            
            // Parallax effect
            const hero = document.querySelector('.hero');
            if (hero && currentScrollTop < hero.offsetHeight) {
                hero.style.transform = `translateY(${currentScrollTop * 0.4}px)`;
                hero.style.opacity = 1 - (currentScrollTop / hero.offsetHeight);
            }

            // Scroll to top button visibility
            if (scrollTop) {
                scrollTop.classList.toggle('active', currentScrollTop > 500);
            }
        });
    }, { passive: true });

    // Mobile menu handling
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Smooth scroll implementation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
                
                // Smooth scroll with easing
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000;
                let start = null;
                
                function animation(currentTime) {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    
                    // Easing function
                    const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                    
                    window.scrollTo(0, startPosition + distance * ease(progress));
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                }
                
                requestAnimationFrame(animation);
            }
        });
    });

    // Lazy loading images
    document.querySelectorAll('img[data-src]').forEach(img => {
        img.parentElement.classList.add('lazy-load');
        observer.observe(img.parentElement);
    });

    // Observe sections for animations
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Scroll to top button click handler
    if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); // End DOMContentLoaded