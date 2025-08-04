// Enhanced Smooth Scrolling for Next Mountain
document.addEventListener('DOMContentLoaded', function() {
    
    // Create scroll progress indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);
    
    // Update scroll progress
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
    
    // Enhanced smooth scrolling for navigation links and logo
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const logoLink = document.querySelector('.navbar-brand');
    
    // Add logo to the smooth scroll functionality
    if (logoLink && logoLink.getAttribute('href') === '#home') {
        navLinks.push(logoLink);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                // Add active class to clicked link (but not logo)
                if (!this.classList.contains('navbar-brand')) {
                    this.classList.add('active');
                }
                
                // Smooth scroll to target
                const headerHeight = document.querySelector('.header.navigation').offsetHeight || 70;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Add animation to target section
                targetSection.classList.add('animate');
                setTimeout(() => {
                    targetSection.classList.remove('animate');
                }, 800);
            }
        });
    });
    
    // Update active navigation link on scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const headerHeight = document.querySelector('.header.navigation').offsetHeight || 70;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.pageYOffset;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all nav links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Add active class to corresponding nav link
                const correspondingLink = document.querySelector(`a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }
    
    // Parallax effect for sections
    function addParallaxEffect() {
        const sections = document.querySelectorAll('.section');
        const scrollTop = window.pageYOffset;
        
        sections.forEach((section, index) => {
            const rate = scrollTop * -0.5;
            if (index % 2 === 0) {
                section.style.transform = `translateY(${rate}px)`;
            }
        });
    }
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Event listeners
    window.addEventListener('scroll', function() {
        updateScrollProgress();
        updateActiveNavLink();
        requestAnimationFrame(addParallaxEffect);
    });
    
    // Initialize on load
    updateScrollProgress();
    updateActiveNavLink();
    
    // Smooth scroll to hash on page load
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
});

// Add easing function for smoother animations
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Custom smooth scroll function with easing
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed / duration) * distance + startPosition;
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    requestAnimationFrame(animation);
}
