document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.navbar__hamburger');
    const nav = document.querySelector('header nav');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            const isOpen = nav.classList.toggle('nav--open');
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.navbar__list a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('nav--open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Hero carousel
    const hero = document.querySelector('.hero');
    const slides = document.querySelectorAll('.hero__slide');
    const prevBtn = document.querySelector('.hero__btn--prev');
    const nextBtn = document.querySelector('.hero__btn--next');

    if (hero && slides.length > 0) {
        let currentSlide = 0;
        let autoplayInterval = null;
        let isHovered = false;
        let isFocused = false;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.setAttribute('aria-hidden', 'false');
                    slide.setAttribute('aria-current', 'true');
                    slide.removeAttribute('inert');
                } else {
                    slide.setAttribute('aria-hidden', 'true');
                    slide.removeAttribute('aria-current');
                    slide.setAttribute('inert', '');
                }
            });
            currentSlide = index;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        function prevSlide() {
            const prev = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prev);
        }

        function startAutoplay() {
            if (!prefersReducedMotion && !isHovered && !isFocused) {
                autoplayInterval = setInterval(nextSlide, 5000);
            }
        }

        function stopAutoplay() {
            if (autoplayInterval) {
                clearInterval(autoplayInterval);
                autoplayInterval = null;
            }
        }

        // Previous/Next button handlers
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                stopAutoplay();
                prevSlide();
                startAutoplay();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                stopAutoplay();
                nextSlide();
                startAutoplay();
            });
        }

        // Pause on hover
        hero.addEventListener('mouseenter', function() {
            isHovered = true;
            stopAutoplay();
        });

        hero.addEventListener('mouseleave', function() {
            isHovered = false;
            startAutoplay();
        });

        // Pause when controls are focused, resume when focus leaves
        hero.addEventListener('focusin', function() {
            isFocused = true;
            stopAutoplay();
        });

        hero.addEventListener('focusout', function() {
            isFocused = false;
            startAutoplay();
        });

        // Keyboard navigation
        hero.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Initialize
        showSlide(0);
        startAutoplay();
    }
});