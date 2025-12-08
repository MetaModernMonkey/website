// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const searchInput = document.getElementById('searchInput');
    const newsletterForm = document.getElementById('newsletterForm');

    // Filter button click handler
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            filterProjects(filterValue, searchInput.value.toLowerCase());
        });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        
        filterProjects(activeFilter, searchTerm);
    });

    // Filter projects based on category and search term
    function filterProjects(category, searchTerm) {
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDesc = card.querySelector('.project-desc').textContent.toLowerCase();
            
            const matchesCategory = category === 'all' || cardCategory === category;
            const matchesSearch = searchTerm === '' || 
                                cardTitle.includes(searchTerm) || 
                                cardDesc.includes(searchTerm);
            
            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
                // Re-trigger animation
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'fadeIn 0.6s ease-out';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    }

    // Newsletter form submission
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (email) {
            // Show success message (in a real app, this would send to a backend)
            showNotification('Thank you for subscribing! 🎉', 'success');
            emailInput.value = '';
        }
    });

    // Notification function
    function showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 20px 30px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #00f5ff, #9d4edd)' : 'linear-gradient(135deg, #ff006e, #ffbe0b)'};
            color: white;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 245, 255, 0.4);
            z-index: 10000;
            font-weight: 600;
            animation: slideInRight 0.5s ease-out, fadeOut 0.5s ease-out 2.5s forwards;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Add smooth scroll behavior for links
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

    // Add parallax effect to background grid with throttling
    let lastScrollTop = 0;
    let ticking = false;

    function updateParallax() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const delta = scrollTop - lastScrollTop;
        
        // Apply subtle parallax to cards
        projectCards.forEach((card, index) => {
            if (!card.classList.contains('hidden')) {
                const speed = 0.02 * (index % 3 + 1);
                const yPos = delta * speed;
                card.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Add hover effect sound (visual feedback)
    const interactiveElements = document.querySelectorAll('.filter-btn, .project-link, .social-link, .btn-primary');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });

    // Initialize - show all projects
    console.log('Meta Modern Monkey - Website loaded successfully! 🚀');
});
