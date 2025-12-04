/**
 * Chantilly's Tallow - Main JavaScript
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Contact Form Handling (placeholder - will be replaced with actual backend)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // For now, just show an alert (replace with actual form submission later)
            alert('Thank you for your message! We will get back to you soon.\n\nNote: This is a placeholder. The form will be connected to a backend service when the site is deployed.');

            // Reset form
            contactForm.reset();

            // TODO: When ready to add e-commerce, integrate with a form service like:
            // - Formspree (https://formspree.io/)
            // - Netlify Forms
            // - EmailJS
            // - Or a custom backend API
        });
    }

    // FAQ Accordion (optional enhancement)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.style.maxHeight;

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = null;
            });

            // Toggle current answer
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }

        lastScroll = currentScroll;
    });
});

/**
 * E-commerce Integration Placeholder
 *
 * When ready to add shopping functionality, you can integrate one of these solutions:
 *
 * 1. Snipcart (Recommended for this project)
 *    - Add this script tag to the HTML <head>:
 *      <script src="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.js"></script>
 *      <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0/default/snipcart.css" />
 *    - Add this to the end of <body>:
 *      <div id="snipcart" data-api-key="YOUR_PUBLIC_API_KEY"></div>
 *    - Add buy buttons to products:
 *      <button class="btn btn-primary snipcart-add-item"
 *        data-item-id="frankincense-lavender"
 *        data-item-price="29.99"
 *        data-item-url="/products.html"
 *        data-item-description="Calming and restorative blend"
 *        data-item-image="/images/product-frankincense-lavender.jpg"
 *        data-item-name="Frankincense & Lavender Tallow Balm">
 *        Add to Cart
 *      </button>
 *
 * 2. Ecwid
 *    - Similar process with Ecwid's embed code
 *
 * 3. Stripe Payment Links
 *    - Create payment links in Stripe Dashboard
 *    - Add as simple button links
 *
 * 4. PayPal Buy Now Buttons
 *    - Generate buttons from PayPal
 *    - Embed in product cards
 */
