 // ============================================
// COACH TESFAYE - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    console.log('🚀 Website Loading...');

    // ============================================
    // 1. MOBILE MENU (Right Side Slide)
    // ============================================
    var hamburger = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');
    var mobileClose = document.getElementById('mobileClose');
    var overlay = document.getElementById('mobileOverlay');

    function openMenu() {
        if (mobileMenu) mobileMenu.classList.add('active');
        if (hamburger) hamburger.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('🍔 Menu Opened');
    }

    function closeMenu() {
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (hamburger) hamburger.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
        console.log('❌ Menu Closed');
    }

    if (hamburger) {
        hamburger.addEventListener('click', openMenu);
        console.log('✅ Hamburger found');
    } else {
        console.log('❌ Hamburger not found');
    }

    if (mobileClose) {
        mobileClose.addEventListener('click', closeMenu);
        console.log('✅ Close button found');
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
        console.log('✅ Overlay found');
    }

    // Close menu when clicking a link
    var mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMenu();
    });

    // ============================================
    // 2. FAQ ACCORDION
    // ============================================
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

     // ============================================
// COUNTDOWN TIMER - 8 MONTHS FROM TODAY
// ============================================

function startCountdown() {

    var daysEl = document.getElementById('days');
    var hoursEl = document.getElementById('hours');
    var minutesEl = document.getElementById('minutes');
    var secondsEl = document.getElementById('seconds');

    // Check if elements exist
    if (!daysEl  || !hoursEl || !minutesEl || !secondsEl) {
        console.log("❌ Countdown elements missing!");
        return;
    }

    console.log("✅ Countdown elements found!");

    // Set target date: 8 months from now
    var now = new Date();
    var targetDate = new Date(now);
    targetDate.setMonth(targetDate.getMonth() + 8);

    console.log("📅 Current Date:", now);
    console.log("🎯 Target Date:", targetDate);

    function updateCountdown() {

        var currentNow = new Date();
        var distance = targetDate.getTime() - currentNow.getTime();

        // Restart countdown after reaching zero
        if (distance <= 0) {
            targetDate = new Date(currentNow);
            targetDate.setMonth(targetDate.getMonth() + 8);
            distance = targetDate.getTime() - currentNow.getTime();
            console.log("🔄 Countdown restarted!");
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, "0");
        hoursEl.textContent = String(hours).padStart(2, "0");
        minutesEl.textContent = String(minutes).padStart(2, "0");
        secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);

    console.log("✅ Countdown started!");
}

// Wait until page is loaded
     startCountdown();
 

    // ============================================
    // 4. BACK TO TOP BUTTON
    // ============================================
    var backToTop = document.getElementById('backToTop');

    if (backToTop) {
        console.log('✅ Back to Top button found');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        console.log('❌ Back to Top button not found');
    }
// ============================================
// CAREER JOURNEY SLIDER
// ============================================

var careerWrapper = document.getElementById('careerSlider');
var careerSlides = document.querySelectorAll('.career-slide');
var careerPrev = document.getElementById('careerPrev');
var careerNext = document.getElementById('careerNext');
var careerDots = document.querySelectorAll('.career-dot');
var careerCurrent = document.getElementById('careerCurrent');
var careerTotal = document.getElementById('careerTotal');

if (careerWrapper && careerSlides.length > 0) {
    var careerIndex = 0;
    var careerCount = careerSlides.length;

    // Update total count
    if (careerTotal) {
        careerTotal.textContent = String(careerCount).padStart(2, '0');
    }

    function goToCareerSlide(index) {
        if (index < 0) index = careerCount - 1;
        if (index >= careerCount) index = 0;
        careerIndex = index;
        careerWrapper.style.transform = 'translateX(-' + (careerIndex * 100) + '%)';
        
        // Update dots
        careerDots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === careerIndex);
        });

        // Update counter
        if (careerCurrent) {
            careerCurrent.textContent = String(careerIndex + 1).padStart(2, '0');
        }
    }

    // Next/Prev buttons
    if (careerNext) {
        careerNext.addEventListener('click', function() {
            goToCareerSlide(careerIndex + 1);
            resetCareerAuto();
        });
    }

    if (careerPrev) {
        careerPrev.addEventListener('click', function() {
            goToCareerSlide(careerIndex - 1);
            resetCareerAuto();
        });
    }

    // Dots
    careerDots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            goToCareerSlide(parseInt(this.getAttribute('data-index')));
            resetCareerAuto();
        });
    });

    // Keyboard arrows
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToCareerSlide(careerIndex - 1);
            resetCareerAuto();
        }
        if (e.key === 'ArrowRight') {
            goToCareerSlide(careerIndex + 1);
            resetCareerAuto();
        }
    });

    // Auto slide
    var careerAuto = setInterval(function() {
        goToCareerSlide(careerIndex + 1);
    }, 4000);

    function resetCareerAuto() {
        clearInterval(careerAuto);
        careerAuto = setInterval(function() {
            goToCareerSlide(careerIndex + 1);
        }, 6000);
    }

    // Pause on hover
    var careerContainer = document.querySelector('.career-slider-container');
    if (careerContainer) {
        careerContainer.addEventListener('mouseenter', function() {
            clearInterval(careerAuto);
        });
        careerContainer.addEventListener('mouseleave', function() {
            careerAuto = setInterval(function() {
                goToCareerSlide(careerIndex + 1);
            }, 6000);
        });
    }

    console.log('✅ Career journey slider ready (' + careerCount + ' milestones)!');
}

    // ============================================
    // 5. ANIMATED STATS COUNTER
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
    // 6. IMAGE SLIDER
    // ============================================
    var sliderWrapper = document.getElementById('sliderWrapper');
    var slides = document.querySelectorAll('.slide');
    var prevSlideBtn = document.getElementById('prevSlide');
    var nextSlideBtn = document.getElementById('nextSlide');
    var dots = document.querySelectorAll('.dot');

    if (sliderWrapper && slides.length > 0) {
        console.log('📸 Found ' + slides.length + ' slides');

        var currentIndex = 0;
        var totalSlides = slides.length;
        var autoSlideInterval;
        function goToSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentIndex = index;
            
            sliderWrapper.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
            
            dots.forEach(function(dot, i) {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

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

        dots.forEach(function(dot, index) {
            dot.addEventListener('click', function() {
                goToSlide(index);
                resetAutoSlide();
            });
        });

        function startAutoSlide() {
            autoSlideInterval = setInterval(function() {
                goToSlide(currentIndex + 1);
            }, 4000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        var sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', function() {
                clearInterval(autoSlideInterval);
            });
            sliderContainer.addEventListener('mouseleave', function() {
                startAutoSlide();
            });
        }

        startAutoSlide();
        console.log('✅ Image slider ready!');
    } else {
        console.log('❌ Slider not found or no slides');
    }

    // ============================================
    // 7. BOOKING FORM - MULTI-STEP
    // ============================================
    var currentStep = 1;
    var totalSteps = 3;

    var step1 = document.getElementById('step1');
    var step2 = document.getElementById('step2');
    var step3 = document.getElementById('step3');
    var successMsg = document.getElementById('formSuccess');
    var bookingForm = document.getElementById('bookingForm');

    console.log('📋 Booking form loaded');

    function scrollToFormTop() {
        var form = document.querySelector('.booking-form');
        if (form) {
            var headerEl = document.querySelector('.header');
            var headerHeight = headerEl ? headerEl.offsetHeight : 80;
            var formPosition = form.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            
            window.scrollTo({
                top: formPosition,
                behavior: 'smooth'
            });
        }
    }

    function updateSteps() {
        if (step1) step1.style.display = 'none';
        if (step2) step2.style.display = 'none';
        if (step3) step3.style.display = 'none';

        if (currentStep === 1 && step1) {
            step1.style.display = 'block';
        } else if (currentStep === 2 && step2) {
            step2.style.display = 'block';
            updatePackageDisplay();
        } else if (currentStep === 3 && step3) {
            step3.style.display = 'block';
            updateTotalPrice();
        }
    }

    function updatePackageDisplay() {
        var packageSelect = document.getElementById('package');
        var display = document.getElementById('selectedPackageDisplay');
        if (packageSelect && display) {
            display.textContent = packageSelect.value;
        }
    }

    function updateTotalPrice() {
        var packageSelect = document.getElementById('package');
        var totalDisplay = document.getElementById('totalPrice');
        if (packageSelect && totalDisplay) {
            var text = packageSelect.value;
            var match = text.match(/(\d+[\d,]*)\s*ብር/);
            if (match) {
                totalDisplay.textContent = match[1] + ' ብር';
            } else {
                totalDisplay.textContent = 'Contact for Price';
            }
        }
    }

    var nextButtons = document.querySelectorAll('.next-step');
    nextButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (currentStep === 1) {
                var name = document.getElementById('fullName');
                var email = document.getElementById('email');
                var phone = document.getElementById('phone');
                
                if (!name.value.trim()  ||!email.value.trim()  ||!phone.value.trim()) {
                    alert('Please fill in all required fields.');
                    return;
                }
            }
            
            if (currentStep < totalSteps) {
                currentStep++;
                updateSteps();
                scrollToFormTop();
            }
        });
    });

    var prevButtons = document.querySelectorAll('.prev-step');
    prevButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            if (currentStep > 1) {
                currentStep--;
                updateSteps();
                scrollToFormTop();
            }
        });
    });

    var packageSelect = document.getElementById('package');
    if (packageSelect) {
        packageSelect.addEventListener('change', function() {
            if (currentStep === 2) {
                updatePackageDisplay();
            }
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            var name = document.getElementById('fullName') ? document.getElementById('fullName').value : '';
            var email = document.getElementById('email') ? document.getElementById('email').value : '';
            var phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
            var genderEl = document.querySelector('input[name="gender"]:checked');
            var gender = genderEl ? genderEl.value : 'Not specified';
            var packageSelected = document.getElementById('package') ? document.getElementById('package').value : '';
            var date = document.getElementById('date') ? document.getElementById('date').value : '';
            var time = document.getElementById('time') ? document.getElementById('time').value : '';
            var paymentMethodEl = document.querySelector('input[name="paymentMethod"]:checked');
            var paymentMethod = paymentMethodEl ? paymentMethodEl.value : 'Not specified';
            var receipt = document.getElementById('paymentReceipt') ? document.getElementById('paymentReceipt').files[0] : null;

            var message = '========================================\n';
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

            console.log('📧 Booking Details:\n' + message);

            if (step1) step1.style.display = 'none';
            if (step2) step2.style.display = 'none';
            if (step3) step3.style.display = 'none';
            if (successMsg) successMsg.style.display = 'block';

            if (successMsg) {
                successMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    console.log('✅ Booking form ready!');

    // ============================================
    // 8. SMOOTH SCROLLING FOR NAV LINKS
    // ============================================
    var allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var headerEl = document.querySelector('.header');
                var headerHeight = headerEl ? headerEl.offsetHeight : 80;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // 9. SCROLL REVEAL ANIMATIONS
    // ============================================
    var revealElements = document.querySelectorAll('.service-card, .pricing-card, .package-card, .testimonial-card, .tip-card, .gallery-item');

    revealElements.forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = (index % 3) * 0.1 + 's';
    });

    var revealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function(el) {
        revealObserver.observe(el);
    });

    // ============================================
    // 10. NAV BAR SCROLL EFFECT
    // ============================================
    var header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset;
        
        if (header) {
            if (currentScroll > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
    });

    console.log('🔥 Coach Tesfaye Website Loaded Successfully!');
    console.log('💪 Built by Sisay Abebayew');
    console.log('✦ Gold & Black Luxury Theme ✦');
});