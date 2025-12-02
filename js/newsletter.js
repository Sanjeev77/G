// Newsletter Form Handler - Secure Brevo Integration
// Form submits directly to Brevo (no API key needed in frontend)

// Initialize newsletter form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');

    if (!form || !emailInput) {
        console.error('Newsletter form elements not found');
        return;
    }

    // Email validation on input blur
    emailInput.addEventListener('blur', function() {
        const email = emailInput.value.trim();
        if (email && !isValidEmail(email)) {
            emailInput.style.borderColor = '#e74c3c';
        } else if (email) {
            emailInput.style.borderColor = 'rgba(46, 213, 115, 0.5)';
        }
    });

    // Reset border color on focus
    emailInput.addEventListener('focus', function() {
        emailInput.style.borderColor = '#f39c12';
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        console.log('🚀 NEWSLETTER.JS VERSION 3.0 - EMAIL FIELD FIX LOADED');

        const email = emailInput.value.trim();

        // Validate email before submission
        if (!isValidEmail(email)) {
            e.preventDefault(); // Only prevent if validation fails
            emailInput.style.borderColor = '#e74c3c';
            showMessage('Please enter a valid email address', 'error');
            emailInput.focus();
            return false;
        }

        // Validation passed - allow natural form submission to iframe
        console.log('✅ Validation passed - form will submit naturally');
        console.log('📧 Email:', email);
        console.log('🎯 Form action:', form.action);
        console.log('📍 Form target:', form.target);
        console.log('🔍 Will submit to iframe - check Network tab for POST request');

        // Disable form AFTER submission starts (disabled inputs aren't submitted!)
        setTimeout(function() {
            setFormState(false);
        }, 10);

        // Setup iframe load handler to detect when submission completes
        const iframe = document.querySelector('iframe[name="newsletter-iframe"]');
        let timeoutId;

        const handleIframeLoad = function() {
            clearTimeout(timeoutId);
            iframe.removeEventListener('load', handleIframeLoad);

            // Show success message
            showMessage('Thank you! You\'ve successfully subscribed to our newsletter.', 'success');
            form.reset();
            emailInput.style.borderColor = '';

            console.log('✅ Newsletter form submitted successfully to Brevo');
            console.log('📊 Check your Brevo dashboard: https://app.brevo.com/contact/list');
            console.log('⚠️ If subscriber is not showing immediately:');
            console.log('   1. Double Opt-in might be enabled - check email for confirmation link');
            console.log('   2. Check "Unconfirmed" or "Pending" contacts in Brevo');
            console.log('   3. Check spam/junk folder for confirmation email');

            // Track conversion (Google Analytics)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'newsletter_signup', {
                    'event_category': 'Newsletter',
                    'event_label': 'Homepage Signup',
                    'value': 1
                });
            }

            // Re-enable form
            setFormState(true);
        };

        // Setup timeout fallback (3 seconds)
        timeoutId = setTimeout(function() {
            iframe.removeEventListener('load', handleIframeLoad);
            console.log('✅ Form submitted (iframe load timeout - this is normal)');

            showMessage('Thank you! You\'ve successfully subscribed to our newsletter.', 'success');
            form.reset();
            emailInput.style.borderColor = '';

            // Re-enable form
            setFormState(true);
        }, 3000);

        // Attach load handler to iframe
        iframe.addEventListener('load', handleIframeLoad);

        // Form will now submit naturally to the iframe target
        // No need to call form.submit() - natural submission works better!
    });
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success/error message
function showMessage(text, type) {
    const messageDiv = document.getElementById('newsletter-message');
    if (!messageDiv) return;

    messageDiv.textContent = text;
    messageDiv.className = `newsletter-message ${type} show`;

    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideMessage();
    }, 5000);
}

// Hide message
function hideMessage() {
    const messageDiv = document.getElementById('newsletter-message');
    if (!messageDiv) return;

    messageDiv.classList.remove('show');
}

// Enable/disable form
function setFormState(enabled) {
    const form = document.getElementById('newsletter-form');
    const emailInput = document.getElementById('newsletter-email');
    const submitBtn = form.querySelector('.newsletter-btn');

    if (enabled) {
        emailInput.disabled = false;
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').textContent = 'Subscribe';
    } else {
        emailInput.disabled = true;
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').textContent = 'Subscribing...';
    }
}

/*
SECURITY NOTE:
==============
This form now submits directly to Brevo's secure endpoint.
No API key is stored in the frontend code (secure ✅).

The form action URL in index.html is a unique form endpoint that:
- Only allows email submissions to your list
- Cannot be abused to access your account
- Is safe to be public

BREVO DASHBOARD:
================
To manage your newsletter:
1. Login to https://www.brevo.com/
2. Go to Contacts > Lists to see subscribers
3. Go to Campaigns to send newsletters
4. Go to Automation for welcome emails

To revoke the old exposed API key:
1. Go to Settings > SMTP & API > API Keys
2. Find the old key starting with "xsmtpsib-5450b241..."
3. Click Delete/Revoke to invalidate it
*/
