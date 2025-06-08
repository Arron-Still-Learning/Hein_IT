 // Animation observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const animateOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Initialize animations when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Animate banner immediately
            setTimeout(() => {
                document.querySelector('.banner').classList.add('animated');
            }, 500);

            // Observe sections for scroll animations
            const sections = document.querySelectorAll('.exp, .edu, .projects, .contact');
            sections.forEach(section => {
                animateOnScroll.observe(section);
            });

            // Observe headings separately
            const headings = document.querySelectorAll('.heading');
            headings.forEach(heading => {
                animateOnScroll.observe(heading);
            });
        });