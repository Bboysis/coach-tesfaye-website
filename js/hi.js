 // ============================================
// COACH TESFAYE - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // 1. MOBILE MENU (Right Side Slide)
    // ============================================
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    var mobileClose = document.getElementById('mobileClose');
    var overlay = document.getElementById('mobileOverlay');
    
    function openMenu() {
        mobileMenu.classList.add('active');
        hamburger.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMenu() {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (hamburger) {
        hamburger.addEventListener('click', openMenu);
    }
    
    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking a link
    var mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMenu();
    });
    
   // ============================================
// FAQ ACCORDION
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    var faqItems = document.querySelectorAll('.faq-item');
    console.log('📋 Found ' + faqItems.length + ' FAQ items');

    faqItems.forEach(function(item, index) {
        var question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                console.log('🔽 FAQ ' + (index + 1) + ' clicked');
                
                // Close all other FAQs
                faqItems.forEach(function(otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle this FAQ
                item.classList.toggle('active');
                
                // Check if active
                if (item.classList.contains('active')) {
                    console.log('✅ FAQ ' + (index + 1) + ' opened');
                } else {
                    console.log('❌ FAQ ' + (index + 1) + ' closed');
                }
            });
        } else {
            console.log('❌ FAQ ' + (index + 1) + ' question not found');
        }
    });

    console.log('✅ FAQ is ready!');
});

console.log('✅ FAQ is ready!');
     
    // ============================================
// COUNTDOWN TIMER - 8 MONTHS FROM TODAY
// ============================================

function startCountdown() {
    var daysEl = document.getElementById('days');
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');

    function updateCountdown() {
        // Get current date and time
        var now = new Date();
        
        // Set target date: 8 months from today
        var targetDate = new Date(now);
        targetDate.setMonth(targetDate.getMonth() + 8);
        
        // Calculate the difference in milliseconds
        var distance = targetDate - now;
        
        // If countdown is finished, restart
        if (distance < 0) {
            var newTarget = new Date(now);
            newTarget.setMonth(newTarget.getMonth() + 8);
            distance = newTarget - now;
        }
        
        // Calculate days, hours, minutes, seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update the display with two digits
        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    // Update immediately
    updateCountdown();
    
    // Update every SECOND (1000 milliseconds)
    setInterval(updateCountdown, 1000);
}

// Start the countdown
startCountdown();        

 // ============================================
// BACK TO TOP BUTTON
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    var backToTop = document.getElementById('backToTop');

    if (backToTop) {
        console.log('✅ Back to Top button found');

        // Show/hide button on scroll
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        // Scroll to top on click
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    } else {
        console.log('❌ Back to Top button not found');
    }
});
// ============================================
// ANIMATED STATS COUNTER
// ============================================
function animateStats() {
    var statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(function(stat) {
        var target = parseInt(stat.getAttribute('data-target'));
        var current = 0;
        var increment = target / 60;
        var duration = 2500;
        var stepTime = duration / 60;
        
        var timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, stepTime);
    });
}

// Trigger stats when visible
var statsSection = document.querySelector('.stats-counter');
if (statsSection) {
    var statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    statsObserver.observe(statsSection);
}
   
  // ============================================
// IMAGE SLIDER
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    var sliderWrapper = document.getElementById('sliderWrapper');
    var slides = document.querySelectorAll('.slide');
    var prevSlideBtn = document.getElementById('prevSlide');
    var nextSlideBtn = document.getElementById('nextSlide');
    var dots = document.querySelectorAll('.dot');

    var currentIndex = 0;
    var totalSlides = slides.length;
    var autoSlideInterval;

    // ===== Go to specific slide =====
    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        currentIndex = index;
        
        if (sliderWrapper) {
            sliderWrapper.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
        }
        
        dots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // ===== Next/Prev Buttons =====
    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', function() {
            goToSlide(currentIndex + 1);
            resetAutoSlide();
        });
    }

    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', function() {
            goToSlide(currentIndex - 1);
            resetAutoSlide();
        });
    }

    // ===== Dot Navigation =====
    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'));
            goToSlide(index);
            resetAutoSlide();
        });
    });

    // ===== Keyboard Navigation =====
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentIndex - 1);
            resetAutoSlide();
        }
        if (e.key === 'ArrowRight') {
            goToSlide(currentIndex + 1);
            resetAutoSlide();
        }
    });

    // ===== Touch/Drag Support =====
    var startX = 0;
    var endX = 0;

    if (sliderWrapper) {
        sliderWrapper.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
        });

        sliderWrapper.addEventListener('touchend', function(e) {
            endX = e.changedTouches[0].clientX;
            var diff = startX - endX;
            if (diff > 50) {
                goToSlide(currentIndex + 1);
                resetAutoSlide();
            } else if (diff < -50) {
                goToSlide(currentIndex - 1);
                resetAutoSlide();
            }
        });

        // Mouse drag support
        var isDragging = false;
        var dragStartX = 0;

        sliderWrapper.addEventListener('mousedown', function(e) {
            isDragging = true;
            dragStartX = e.pageX;
            sliderWrapper.style.cursor = 'grabbing';
        });

        window.addEventListener('mousemove', function(e) {
            if (!isDragging) return;
        });

        window.addEventListener('mouseup', function(e) {
            if (!isDragging) return;
            isDragging = false;
            sliderWrapper.style.cursor = 'grab';
            var diff = dragStartX - e.pageX;
            if (diff > 50) {
                goToSlide(currentIndex + 1);
                resetAutoSlide();
            } else if (diff < -50) {
                goToSlide(currentIndex - 1);
                resetAutoSlide();
            }
        });
    }

    // ===== Auto Slide =====
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            goToSlide(currentIndex + 1);
        }, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
    // ===== Pause on Hover =====
    var sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', function() {
            clearInterval(autoSlideInterval);
        });
        sliderContainer.addEventListener('mouseleave', function() {
            startAutoSlide();
        });
    }

    // ===== Start Auto Slide =====
    startAutoSlide();

    console.log('📸 Image Slider is ready!');
});

    // ============================================
    // 3. BOOKING FORM - MULTI-STEP
    // ============================================
    let currentStep = 1;
    const totalSteps = 3;

    // Get all steps
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const successMsg = document.getElementById('formSuccess');
    const bookingForm = document.getElementById('bookingForm');

    // Get all next/prev buttons
    document.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', function() {
            // Validate current step before proceeding
            if (currentStep === 1) {
                const name = document.getElementById('fullName');
                const email = document.getElementById('email');
                const phone = document.getElementById('phone');
                
                if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
                    alert('Please fill in all required fields.');
                    return;
                }
            }
            
            if (currentStep < totalSteps) {
                currentStep++;
                updateSteps();
            }
        });
    });

    document.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                currentStep--;
                updateSteps();
            }
        });
    });

    // Update which step is visible
    function updateSteps() {
        // Hide all steps
        if (step1) step1.style.display = 'none';
        if (step2) step2.style.display = 'none';
        if (step3) step3.style.display = 'none';

        // Show current step
        if (currentStep === 1 && step1) {
            step1.style.display = 'block';
        } else if (currentStep === 2 && step2) {
            step2.style.display = 'block';
            updatePackageDisplay();
        } else if (currentStep === 3 && step3) {
            step3.style.display = 'block';
            updateTotalPrice();
        }

        // Scroll to top of form
        const form = document.querySelector('.booking-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Update package display
    function updatePackageDisplay() {
        const packageSelect = document.getElementById('package');
        const display = document.getElementById('selectedPackageDisplay');
        if (packageSelect && display) {
            display.textContent = packageSelect.value;
        }
    }
    // Update total price
    function updateTotalPrice() {
        const packageSelect = document.getElementById('package');
        const totalDisplay = document.getElementById('totalPrice');
        if (packageSelect && totalDisplay) {
            // Extract price from option text
            const text = packageSelect.value;
            const match = text.match(/(\d+[\d,]*)\s*ብር/);
            if (match) {
                totalDisplay.textContent = match[1] + ' ብር';
            } else {
                totalDisplay.textContent = 'Contact for Price';
            }
        }
    }

    // Update display when package changes
    const packageSelect = document.getElementById('package');
    if (packageSelect) {
        packageSelect.addEventListener('change', function() {
            if (currentStep === 2) {
                updatePackageDisplay();
            }
        });
    }

    // ============================================
    // 4. BOOKING FORM SUBMISSION
    // ============================================
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get all form data
            const name = document.getElementById('fullName')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const phone = document.getElementById('phone')?.value || '';
            const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not specified';
            const packageSelected = document.getElementById('package')?.value || '';
            const date = document.getElementById('date')?.value || '';
            const time = document.getElementById('time')?.value || '';
            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'Not specified';
            const receipt = document.getElementById('paymentReceipt')?.files[0] || null;

            // Build email content
            let message = '========================================\n';
            message += '📋 NEW BOOKING REQUEST\n';
            message += '========================================\n\n';
            message += '📌 PERSONAL INFORMATION\n';
            message += '----------------------------------------\n';
            message += 'Full Name: ' + name + '\n';
            message += 'Email: ' + email + '\n';
            message += 'Phone: ' + phone + '\n';
            message += 'Gender: ' + gender + '\n\n';
            message += '📌 BOOKING DETAILS\n';
            message += '----------------------------------------\n';
            message += 'Package: ' + packageSelected + '\n';
            message += 'Date: ' + date + '\n';
            message += 'Time: ' + time + '\n\n';
            message += '📌 PAYMENT\n';
            message += '----------------------------------------\n';
            message += 'Payment Method: ' + paymentMethod + '\n';
            message += 'Receipt Uploaded: ' + (receipt ? 'YES (' + receipt.name + ')' : 'NO') + '\n\n';
            message += '========================================\n';
            message += 'Please contact the client to confirm booking.\n';
            message += '========================================\n';

            // In a real implementation, this would send an email
            // For now, we'll show a success message and log to console
            console.log('📧 Booking Details:\n' + message);

            // Show success message
            if (step1) step1.style.display = 'none';
            if (step2) step2.style.display = 'none';
            if (step3) step3.style.display = 'none';
            if (successMsg) successMsg.style.display = 'block';

            // Scroll to success message
            if (successMsg) {
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Optionally, open email client
            // window.location.href = 'mailto:tesfayeacheramto@gmail.com?subject=New%20Booking%20Request&body=' + encodeURIComponent(message);
        });
    }

    // ============================================
    // 5. SMOOTH SCROLLING FOR NAV LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // 6. SCROLL REVEAL ANIMATIONS
    // ============================================
    const revealElements = document.querySelectorAll('.service-card, .pricing-card, .package-card, .testimonial-card, .tip-card, .gallery-item');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = (index % 3) * 0.1 + 's';
        revealObserver.observe(el);
    });

    // ============================================
    // 7. NAV BAR SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    console.log('🔥 Coach Tesfaye Website Loaded Successfully!');
    console.log('💪 Built by Sisay Abebayew');
    console.log('✦ Gold & Black Luxury Theme ✦');
});