/**
 * Md. Rezaul Islam - Portfolio JavaScript Document
 * Contains typing effect, dark/light theme switcher, scroll-reveals,
 * dynamic skills loader, interactive iPhone simulator, and mobile drawer.
 */

// -------------------------------------------------------------
// 1. Projects Database for the Interactive iPhone Simulator
// -------------------------------------------------------------
const projectsData = {
    koalafi: {
        title: "Koalafi",
        icon: "💳",
        category: "Fintech App",
        link: "https://apps.apple.com/us/app/koalafi-lease-to-own/id6748753565",
        tech: ["Swift", "SwiftUI", "Mapbox", "Biometrics", "Keychain", "XCTest", "Code Review"],
        description: "Currently working on this iOS application at Tekarsh since September 11, 2025. It is a premier buy-now-pay-later and consumer finance app facilitating seamless lending services, with secure biometric authorization, Mapbox store location tools, and elegant SwiftUI architecture.",
        mockup: {
            title: "Koalafi Mobile Finance",
            subtitle: "Fintech Platform",
            bullets: [
                "Integrated secure biometric login synced via secure iOS Keychain",
                "Embedded Mapbox mapping SDK locating nearest shops dynamically",
                "Implemented in-app reviews & resolved complex SwiftUI sheet bugs",
                "Authored thorough XCTest suites & conducted rigorous code reviews"
            ]
        }
    },
    "7seconds": {
        title: "7Seconds",
        icon: "🎬",
        category: "Social Media",
        tech: ["Swift", "SwiftUI", "MVVM", "AVFoundation", "Factory DI", "Realm", "Keychain"],
        description: "A fast-paced social media application built from scratch using MVVM, letting users upload 7-second short videos, apply video filters, merge clips, participate in challenges, and enjoy an endless scroll of short videos.",
        mockup: {
            title: "7Seconds Creative Hub",
            subtitle: "Social & Short Video",
            bullets: [
                "Custom video trim & merge via AVFoundation",
                "Endless feed pre-fetching & cache logic",
                "Decoupled DI system via Factory patterns",
                "Secure credentials managed through Keychain"
            ]
        }
    },
    doctime: {
        title: "DocTime",
        icon: "🩺",
        category: "iOS & Android",
        link: "https://play.google.com/store/apps/details?id=com.media365ltd.doctime&hl=en",
        tech: ["Swift", "Kotlin", "CallKit", "PushKit", "Retrofit", "Hilt", "FCM"],
        description: "Comprehensive telemedicine app enabling live doctor calls, EMR records, and pharmacy items. Co-engineered both native platforms (iOS and Android) from scratch.",
        mockup: {
            title: "DocTime Telehealth Suite",
            subtitle: "Health & Telemedicine",
            bullets: [
                "Integrated CallKit & PushKit VoIP background calls on native iOS app",
                "Developed reactive API integrations using Kotlin Coroutines & Retrofit on Android",
                "Maintained high crash-free rates with unified FCM remote notifications",
                "Constructed secure EMR structures & resolved UIKit-to-SwiftUI bridging"
            ]
        }
    },
    ratehammer: {
        title: "Ratehammer",
        icon: "⚖️",
        category: "Fintech & Loans",
        tech: ["Swift", "SwiftUI", "MVVM", "PencilKit", "Persona SDK", "Realm Database", "Localization"],
        description: "A KSA-focused fintech application providing digital loan comparisons, interest rate grids, dynamic localization, and handdrawn signatures.",
        mockup: {
            title: "Ratehammer Lending",
            subtitle: "Fintech Comparison",
            bullets: [
                "Dual English & Arabic RTL localizations",
                "PencilKit integration for clean contract sign",
                "Offline database caching built using Realm",
                "Seamless Persona identity verification"
            ]
        }
    },
    bancharampur: {
        title: "Bancharampur",
        icon: "🏡",
        category: "Community Helper",
        tech: ["Swift", "SwiftUI", "MVVM", "Combine", "REST API Integration"],
        description: "Connecting the Bancharampur community with essential public services, doctor updates, hotlines, and local notices.",
        mockup: {
            title: "Bancharampur Connect",
            subtitle: "Community Portal",
            bullets: [
                "Combine frameworks for reactive listings",
                "Low-latency REST requests & offline cache",
                "One-tap emergency call & map routing",
                "Interactive regional notice boards"
            ]
        }
    },
    macrofit: {
        title: "Macrofit",
        icon: "🥗",
        category: "Fitness & Nutrition",
        tech: ["Swift", "SwiftUI", "PDFKit", "Charts", "YoutubePlayerKit", "Lottie Viewer"],
        description: "Personalized meal planner and activity companion that guides users to track daily macros, generate reports, and watch fitness clips.",
        mockup: {
            title: "Macrofit Nutrition",
            subtitle: "Health & Diet Companion",
            bullets: [
                "Custom progress vectors utilizing Swift Charts",
                "Rendered macro receipts using PDFKit export",
                "Lottie files rendering micro-animations",
                "Smooth video playback with YoutubePlayerKit"
            ]
        }
    },
    crustpizza: {
        title: "CRUST Pizza",
        icon: "🍕",
        category: "Food Delivery",
        tech: ["Swift", "SwiftUI", "MapKit", "Push Notifications", "REST API"],
        description: "Interactive ordering and delivery platform for CRUST Pizza, tracking orders in real-time.",
        mockup: {
            title: "CRUST Pizza Engine",
            subtitle: "Food Delivery Hub",
            bullets: [
                "MapKit integrations to trace order logistics",
                "Visual phase tracking (prep -> bake -> ship)",
                "Reactive grid-style interactive food menu",
                "FCM push updates for cooking updates"
            ]
        }
    }
};

// -------------------------------------------------------------
// 2. Initialize Dom Elements & Main Operations
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initMobileNav();
    initTypewriter();
    initScrollReveals();
    initSkillsObserver();
    initiPhoneSimulator();
    initContactForm();
    initCurrentYear();
});

// -------------------------------------------------------------
// 3. Light / Dark Theme Switching Logic
// -------------------------------------------------------------
function initTheme() {
    const themeBtn = document.getElementById("theme-toggle");
    if (!themeBtn) return;
    
    // Check local storage or match system preferences
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    
    if (storedTheme === "light" || (!storedTheme && systemPrefersLight)) {
        document.body.classList.add("light-theme");
    }
    
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        
        // Save preference
        if (document.body.classList.contains("light-theme")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}

// -------------------------------------------------------------
// 4. Mobile Drawer Menu Functions
// -------------------------------------------------------------
function initMobileNav() {
    const navToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    
    if (!navToggle || !navMenu) return;
    
    // Toggle Menu Open
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const isOpen = navMenu.classList.contains("active");
        navToggle.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
        
        // Re-evaluate Lucide Icons loaded dynamically
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });
    
    // Close menu when links are clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
                navToggle.innerHTML = '<i data-lucide="menu"></i>';
                if (window.lucide) {
                    window.lucide.createIcons();
                }
            }
        });
    });
}

// -------------------------------------------------------------
// 5. Hero Typewriter Animation
// -------------------------------------------------------------
function initTypewriter() {
    const textElement = document.getElementById("typewriter-text");
    if (!textElement) return;
    
    const words = ["Senior iOS Developer", "Mobile Application Engineer", "Clean Architecture Expert"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
            typingSpeed = 50; // Deletes faster
        } else {
            charIndex++;
            typingSpeed = 100;
        }
        
        textElement.textContent = currentWord.substring(0, charIndex);
        
        if (!isDeleting && charIndex === currentWord.length) {
            // Finished typing word, wait before deleting
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Small delay before typing next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// -------------------------------------------------------------
// 6. Intersection Observer for Scroll Reveals
// -------------------------------------------------------------
function initScrollReveals() {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });
    
    revealElements.forEach(el => observer.observe(el));
}

// -------------------------------------------------------------
// 7. Skills Visual Observer (Animate Skill Bars)
// -------------------------------------------------------------
function initSkillsObserver() {
    const skillsSection = document.getElementById("skills");
    const skillBars = document.querySelectorAll(".skill-bar-progress");
    
    if (!skillsSection || skillBars.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const progressVal = bar.getAttribute("data-progress");
                    bar.style.width = progressVal + "%";
                });
                observer.unobserve(skillsSection);
            }
        });
    }, {
        threshold: 0.15
    });
    
    observer.observe(skillsSection);
}

// -------------------------------------------------------------
// 8. iPhone Interactive Simulator Controller
// -------------------------------------------------------------
function initiPhoneSimulator() {
    const projectCards = document.querySelectorAll(".project-card");
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    // Screens elements inside the iPhone
    const appIcon = document.getElementById("phone-app-icon");
    const appName = document.getElementById("phone-app-name");
    const appCategory = document.getElementById("phone-app-cat");
    const appTitle = document.getElementById("phone-screen-title");
    const appBulletsList = document.getElementById("phone-bullets-list");
    const screenContainer = document.getElementById("phone-screen-container");
    
    if (projectCards.length === 0 || !screenContainer) return;
    
    // Function to load project details into the iPhone Screen with smooth transitions
    function loadProjectScreen(projectId) {
        const data = projectsData[projectId];
        if (!data) return;
        
        // Trigger fade out
        screenContainer.style.opacity = 0;
        screenContainer.style.transform = "translateY(8px)";
        
        setTimeout(() => {
            // Update Text Content
            appIcon.textContent = data.icon;
            appName.textContent = data.title;
            appCategory.textContent = data.category;
            appTitle.textContent = data.mockup.title;
            
            // Build bullet items
            appBulletsList.innerHTML = "";
            data.mockup.bullets.forEach(bullet => {
                const li = document.createElement("li");
                li.textContent = bullet;
                appBulletsList.appendChild(li);
            });
            
            // Update simulator link button
            const linkBtn = document.getElementById("phone-app-link");
            if (linkBtn) {
                if (data.link) {
                    linkBtn.href = data.link;
                    linkBtn.style.display = "inline-flex";
                    
                    // Format button label based on link type
                    if (data.link.includes("play.google.com")) {
                        linkBtn.querySelector("span").textContent = "Get on Play Store";
                    } else if (data.link.includes("apps.apple.com")) {
                        linkBtn.querySelector("span").textContent = "Get on App Store";
                    } else {
                        linkBtn.querySelector("span").textContent = "Get App";
                    }
                } else {
                    linkBtn.style.display = "none";
                }
            }
            
            // Trigger fade in
            screenContainer.style.opacity = 1;
            screenContainer.style.transform = "translateY(0)";
        }, 250);
    }
    
    // Load default project (first one)
    const initialActiveCard = document.querySelector(".project-card.active");
    if (initialActiveCard) {
        loadProjectScreen(initialActiveCard.getAttribute("data-id"));
    }
    
    // Register Card Click / Hover handlers
    projectCards.forEach(card => {
        const projectId = card.getAttribute("data-id");
        
        const activateCard = () => {
            if (card.classList.contains("active")) return;
            
            // Remove active status from other cards
            projectCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            
            // Update device screen
            loadProjectScreen(projectId);
        };
        
        card.addEventListener("click", activateCard);
        card.addEventListener("mouseenter", activateCard);
    });
    
    // Filters Handler
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active state
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const filterValue = btn.getAttribute("data-filter");
            
            let firstVisibleCard = null;
            
            projectCards.forEach(card => {
                const cardTags = card.getAttribute("data-tags").split(" ");
                
                if (filterValue === "all" || cardTags.includes(filterValue)) {
                    card.style.display = "block";
                    if (!firstVisibleCard) firstVisibleCard = card;
                } else {
                    card.style.display = "none";
                }
            });
            
            // Auto-select first visible card in filter to sync iPhone screen
            if (firstVisibleCard) {
                firstVisibleCard.click();
            }
        });
    });
}

// -------------------------------------------------------------
// 9. Contact Form Validator & Dynamic Feedback
// -------------------------------------------------------------
function initContactForm() {
    const form = document.getElementById("portfolio-contact-form");
    const statusBox = document.getElementById("form-status-msg");
    
    if (!form || !statusBox) return;
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("contact-message").value.trim();
        
        if (!name || !email || !message) {
            showStatus("Please fill in all standard fields.", "error");
            return;
        }
        
        // Construct pre-filled email mailto details
        const recipient = "mrezaulislam.t@gmail.com";
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const bodyText = `Hi Rezaul,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`;
        const body = encodeURIComponent(bodyText);
        
        // Trigger mail app synchronously to ensure browser allows custom protocols
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        
        showStatus("Pre-filled email client successfully launched!", "success");
        form.reset();
    });
    
    function showStatus(msg, type) {
        statusBox.textContent = msg;
        statusBox.className = "form-status";
        
        if (type === "success") {
            statusBox.classList.add("success");
        } else if (type === "error") {
            statusBox.classList.add("error");
        } else {
            statusBox.style.display = "block";
            statusBox.style.color = "var(--text-secondary)";
        }
        
        // Fade out message after 5 seconds if success/error
        if (type) {
            setTimeout(() => {
                statusBox.style.opacity = 0;
                setTimeout(() => {
                    statusBox.style.display = "none";
                    statusBox.style.opacity = 1;
                }, 300);
            }, 5000);
        }
    }
}

// -------------------------------------------------------------
// 10. Auto-update Current Year
// -------------------------------------------------------------
function initCurrentYear() {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}
