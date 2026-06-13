/**
 * Dynamic Core Interactivity Script
 * Portfolio of Kethavath Ganesh Naik
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       ✅ CONFIGURING FLOATING PURPLE NEON PARTICLES
       ========================================== */
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { 
                    "value": 55, 
                    "density": { "enable": true, "value_area": 800 } 
                },
                "color": { "value": "#a855f7" },
                "shape": { "type": "circle" },
                "opacity": { 
                    "value": 0.25, 
                    "random": true 
                },
                "size": { 
                    "value": 3, 
                    "random": true 
                },
                "line_linked": { 
                    "enable": true, 
                    "distance": 140, 
                    "color": "#a855f7", 
                    "opacity": 0.12, 
                    "width": 1 
                },
                "move": { 
                    "enable": true, 
                    "speed": 1.2, 
                    "direction": "none", 
                    "random": false, 
                    "straight": false, 
                    "out_mode": "out" 
                }
            },
            "interactivity": { 
                "detect_on": "canvas", 
                "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } 
            },
            "retina_detect": true
        });
    }

    /* ==========================================
       ✅ MOBILE MENU DRAWER COMPRESSION HANDLER
       ========================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
        });

        // Close menu drawer upon option link clicks automatically
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
            });
        });
    }

    /* ==========================================
       ✅ WINDOW SCROLL VIEWPORT MONITOR FOR REVEAL
       ========================================== */
    function evaluateViewportReveal() {
        const structuralRevealNodes = document.querySelectorAll('.reveal');
        
        structuralRevealNodes.forEach(element => {
            const clientViewportHeight = window.innerHeight;
            const elementTopBoundingBox = element.getBoundingClientRect().top;
            const activationOffsetPadding = 90; // Pixels distance offset threshold
            
            if (elementTopBoundingBox < clientViewportHeight - activationOffsetPadding) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', evaluateViewportReveal);
    
    // Primary trigger sweep pass
    evaluateViewportReveal();
});