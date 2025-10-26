document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Hamburger Menu Toggle Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const navLinks = document.querySelectorAll('.main-nav-wrapper nav ul li a');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navWrapper.classList.toggle('active');
        });

        // Close menu when a link is clicked (for mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is active (mobile view)
                if (window.innerWidth <= 992) {
                    hamburger.classList.remove('active');
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    // 2. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const answer = faqItem.querySelector('.faq-answer');
            
            // Toggle the 'active' class on the clicked item
            faqItem.classList.toggle('active');

            // Set max-height for smooth transition
            if (faqItem.classList.contains('active')) {
                // Set the max-height to the scroll height of the content to reveal it
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = "0";
            }

            // Close other open answers
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = "0";
                }
            });
        });
    });

    // 3. Set current year for copyright
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
});