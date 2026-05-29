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
        },
        htmlTemplate: `
        <div class="mock-app-screen koalafi-screen">
            <div class="mock-app-header">
                <span class="app-logo">koalafi</span>
                <div class="app-header-icons">
                    <span class="app-bell">🔔</span>
                </div>
            </div>
            <div class="mock-lease-card">
                <span class="card-label">Approved Credit Limit</span>
                <h4 class="card-amount">$3,000.00</h4>
                <div class="card-badge">Ready to Use</div>
                <div class="card-chip"></div>
            </div>
            <div class="mock-map-section">
                <span class="section-lbl">Retail Partners Nearby</span>
                <div class="mini-map">
                    <div class="map-pin current-user">🔵</div>
                    <div class="map-pin partner-1">🏪 Best Buy <span class="distance">1.2 mi</span></div>
                    <div class="map-pin partner-2">🏬 Apple Store <span class="distance">2.4 mi</span></div>
                </div>
            </div>
            <div class="mock-biometrics-btn" id="sim-faceid-btn">
                <span>Quick FaceID Login</span>
                <span class="bio-icon">👤</span>
            </div>
        </div>
        `
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
        },
        htmlTemplate: `
        <div class="mock-app-screen seconds-screen">
            <div class="video-overlay">
                <div class="video-tabs">
                    <span>Following</span>
                    <span class="active-tab">For You</span>
                </div>
                
                <div class="sidebar-actions">
                    <div class="avatar-wrapper">
                        <span class="avatar-initials">RI</span>
                        <span class="add-badge">+</span>
                    </div>
                    <div class="action-item active-heart" id="sim-heart-btn">
                        <span class="action-icon">❤️</span>
                        <span class="action-count" id="sim-heart-count">14.2K</span>
                    </div>
                    <div class="action-item">
                        <span class="action-icon">💬</span>
                        <span class="action-count">342</span>
                    </div>
                    <div class="action-item">
                        <span class="action-icon">🔗</span>
                        <span class="action-count">Share</span>
                    </div>
                    <div class="music-disc-wrapper">
                        <div class="music-disc">🎵</div>
                    </div>
                </div>
                
                <div class="video-caption">
                    <h5 class="video-user">@rezaul.dev</h5>
                    <p class="video-desc text-clamp">Endless scrolling SwiftUI video feeds. Super smooth pre-fetching! 🚀 #ios #avfoundation</p>
                </div>
            </div>
        </div>
        `
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
        },
        htmlTemplate: `
        <div class="mock-app-screen doctime-screen">
            <div class="mock-app-header-colored">
                <span class="app-logo">DocTime</span>
                <span class="online-tag">Live</span>
            </div>
            <div class="doctime-search">
                <span class="search-placeholder">🔍 Search doctors or pharmacies</span>
            </div>
            <div class="doctor-card-preview">
                <div class="doc-header">
                    <div class="doc-avatar">🩺</div>
                    <div class="doc-info">
                        <h6>Dr. Sarah Jenkins</h6>
                        <span>Cardiologist</span>
                        <div class="doc-rating">★ 4.9 (124 reviews)</div>
                    </div>
                </div>
                <div class="doc-status-line">
                    <span class="online-dot-pulse"></span>
                    <span class="status-lbl">Available Now</span>
                </div>
                <button class="call-btn-mini" id="sim-voip-btn">Instant Video Call</button>
            </div>
            <div class="voip-call-toast" id="sim-voip-toast">
                <div class="toast-content">
                    <span class="toast-phone">📞</span>
                    <div class="toast-text">
                        <strong>VoIP Call Connected</strong>
                        <span>Background CallKit Active</span>
                    </div>
                </div>
            </div>
        </div>
        `
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
        },
        htmlTemplate: `
        <div class="mock-app-screen ratehammer-screen">
            <div class="rate-header">
                <span>Ratehammer</span>
                <button class="lang-toggle-btn" id="sim-lang-btn">العربية</button>
            </div>
            <div class="loan-slider-box">
                <div class="slider-meta">
                    <label class="slider-lbl">Select Loan Amount</label>
                    <div class="slider-val" id="sim-slider-val">$45,000</div>
                </div>
                <input type="range" min="10000" max="100000" value="45000" class="sim-slider" id="sim-loan-slider">
            </div>
            <div class="comparison-results">
                <div class="bank-row">
                    <span>Riyadh Bank</span>
                    <strong id="sim-riyadh-rate">3.4% APR</strong>
                </div>
                <div class="bank-row">
                    <span>Al Rajhi Bank</span>
                    <strong id="sim-rajhi-rate">3.6% APR</strong>
                </div>
            </div>
            <div class="canvas-sign-box">
                <span class="canvas-lbl">Draw signature below:</span>
                <div class="signature-canvas" id="sim-sig-canvas">
                    <svg class="sig-svg" viewBox="0 0 200 50">
                        <path d="M 20 35 Q 40 15 70 35 T 120 25 T 180 35" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>
        `
    },
    bancharampur: {
        title: "Bancharampur",
        icon: "🏡",
        category: "Community Helper",
        link: "https://apps.apple.com/co/app/bancharampur/id6745149487",
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
        },
        htmlTemplate: `
        <div class="mock-app-screen bancharampur-screen">
            <div class="banch-header">
                <span>Bancharampur Connect</span>
                <span>🏡</span>
            </div>
            <div class="emergency-grid">
                <div class="emergency-btn-card red-card" onclick="alert('Calling Regional Ambulance Hotline...')">
                    <span class="card-icon">🚑</span>
                    <span class="card-name">Ambulance</span>
                </div>
                <div class="emergency-btn-card orange-card">
                    <span class="card-icon">🚒</span>
                    <span class="card-name">Fire Station</span>
                </div>
                <div class="emergency-btn-card blue-card">
                    <span class="card-icon">🚓</span>
                    <span class="card-name">Police</span>
                </div>
                <div class="emergency-btn-card green-card">
                    <span class="card-icon">📞</span>
                    <span class="card-name">Admin</span>
                </div>
            </div>
            <div class="news-ticker-box">
                <span class="news-ticker-lbl">📢 Local Update</span>
                <p class="news-ticker-content text-clamp">Weekly vaccine drive at regional Upazila clinic starting Sunday. Carry NID card.</p>
            </div>
        </div>
        `
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
        },
        htmlTemplate: `
        <div class="mock-app-screen macrofit-screen">
            <div class="macro-header">
                <span>Macrofit Nutrition</span>
                <span>🥗</span>
            </div>
            <div class="calories-progress-box">
                <div class="svg-ring-container">
                    <svg class="progress-ring" width="80" height="80">
                        <circle class="progress-ring-bg" stroke="rgba(255,255,255,0.08)" stroke-width="6" fill="transparent" r="32" cx="40" cy="40"/>
                        <circle class="progress-ring-circle" stroke="var(--accent-color)" stroke-width="6" fill="transparent" r="32" cx="40" cy="40" stroke-dasharray="201" stroke-dashoffset="55"/>
                    </svg>
                    <div class="ring-text">
                        <strong class="ring-val">1,840</strong>
                        <span class="ring-unit">kcal</span>
                    </div>
                </div>
                <div class="calories-text">
                    <strong>Goal: 2,400 kcal</strong>
                    <span>560 kcal remaining</span>
                </div>
            </div>
            <div class="nutrient-progress-grid">
                <div class="nutrient-item">
                    <div class="nutrient-meta">
                        <span>Protein</span>
                        <strong>120g / 150g</strong>
                    </div>
                    <div class="nutrient-bar"><div class="nutrient-fill" style="width: 80%; background: var(--accent-color);"></div></div>
                </div>
                <div class="nutrient-item">
                    <div class="nutrient-meta">
                        <span>Carbohydrates</span>
                        <strong>180g / 250g</strong>
                    </div>
                    <div class="nutrient-bar"><div class="nutrient-fill" style="width: 72%; background: #27ae60;"></div></div>
                </div>
            </div>
        </div>
        `
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
        },
        htmlTemplate: `
        <div class="mock-app-screen crust-screen">
            <div class="crust-header">
                <span>CRUST Pizza Engine</span>
                <span>🍕</span>
            </div>
            <div class="delivery-status-timeline">
                <div class="timeline-step done">
                    <div class="step-dot">✓</div>
                    <span class="step-lbl">Ordered</span>
                </div>
                <div class="timeline-step active-step">
                    <div class="step-dot active-dot">🔥</div>
                    <span class="step-lbl">Baking</span>
                </div>
                <div class="timeline-step">
                    <div class="step-dot">🛵</div>
                    <span class="step-lbl">Deliver</span>
                </div>
            </div>
            <div class="active-order-box">
                <h6 class="order-title">Active Order</h6>
                <p class="order-details">1x Large Pepperoni Pizza, Double Cheese</p>
            </div>
            <div class="mock-map-crust">
                <div class="road-path"></div>
                <span class="map-icon pizza-shop">🍕</span>
                <span class="map-icon moving-moto" id="sim-delivery-moto">🛵</span>
                <span class="map-icon user-home">🏠</span>
            </div>
        </div>
        `
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
    
    // Desktop screens elements inside the iPhone
    const screenContainer = document.getElementById("phone-screen-container");
    
    if (projectCards.length === 0 || !screenContainer) return;
    
    // Function to bind high-fidelity mockup micro-interactions
    function bindSimulatorInteractions(container, projectId) {
        if (!container) return;
        
        // 1. Koalafi FaceID Login Simulation
        if (projectId === "koalafi") {
            const faceBtn = container.querySelector("#sim-faceid-btn");
            if (faceBtn) {
                faceBtn.addEventListener("click", () => {
                    faceBtn.innerHTML = `<span>Scanning FaceID...</span><span class="bio-icon">🌀</span>`;
                    faceBtn.style.borderColor = "rgba(255,255,255,0.3)";
                    
                    setTimeout(() => {
                        faceBtn.innerHTML = `<span>FaceID Success!</span><span class="bio-icon">✅</span>`;
                        faceBtn.style.background = "rgba(39, 174, 96, 0.15)";
                        faceBtn.style.borderColor = "#27ae60";
                        faceBtn.style.color = "#27ae60";
                    }, 1200);
                });
            }
        }
        
        // 2. 7Seconds Video Heart Simulation
        if (projectId === "7seconds") {
            const heartBtn = container.querySelector("#sim-heart-btn");
            const heartCount = container.querySelector("#sim-heart-count");
            if (heartBtn && heartCount) {
                heartBtn.addEventListener("click", () => {
                    heartBtn.classList.toggle("liked");
                    if (heartBtn.classList.contains("liked")) {
                        heartBtn.style.color = "#ff2d55";
                        heartCount.textContent = "14.3K";
                        
                        // Spawn floating heart effect
                        const heartPop = document.createElement("span");
                        heartPop.textContent = "❤️";
                        heartPop.style.position = "absolute";
                        heartPop.style.left = "50%";
                        heartPop.style.top = "40%";
                        heartPop.style.transform = "translate(-50%, -50%)";
                        heartPop.style.fontSize = "3rem";
                        heartPop.style.pointerEvents = "none";
                        heartPop.style.animation = "float-heart 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards";
                        container.appendChild(heartPop);
                        setTimeout(() => heartPop.remove(), 800);
                    } else {
                        heartBtn.style.color = "";
                        heartCount.textContent = "14.2K";
                    }
                });
            }
        }
        
        // 3. DocTime VoIP Instant Doctor Call
        if (projectId === "doctime") {
            const voipBtn = container.querySelector("#sim-voip-btn");
            const voipToast = container.querySelector("#sim-voip-toast");
            if (voipBtn && voipToast) {
                voipBtn.addEventListener("click", () => {
                    voipToast.classList.add("show-toast");
                    voipBtn.textContent = "In Call";
                    voipBtn.style.background = "#27ae60";
                    voipBtn.style.color = "#ffffff";
                    
                    let seconds = 0;
                    const durationLbl = document.createElement("div");
                    durationLbl.className = "toast-call-duration";
                    durationLbl.style.fontSize = "0.68rem";
                    durationLbl.style.opacity = "0.8";
                    durationLbl.textContent = "Duration: 0:00";
                    voipToast.querySelector(".toast-text").appendChild(durationLbl);
                    
                    const callTimer = setInterval(() => {
                        if (!voipToast.classList.contains("show-toast")) {
                            clearInterval(callTimer);
                            return;
                        }
                        seconds++;
                        const m = Math.floor(seconds / 60);
                        const s = seconds % 60;
                        durationLbl.textContent = `Duration: ${m}:${s < 10 ? '0' : ''}${s}`;
                    }, 1000);
                    
                    // Click toast to hang up
                    voipToast.addEventListener("click", () => {
                        voipToast.classList.remove("show-toast");
                        clearInterval(callTimer);
                        durationLbl.remove();
                        voipBtn.textContent = "Instant Video Call";
                        voipBtn.style.background = "";
                        voipBtn.style.color = "";
                    });
                });
            }
        }
        
        // 4. Ratehammer Loan Calculator & Sign Box
        if (projectId === "ratehammer") {
            const slider = container.querySelector("#sim-loan-slider");
            const sliderVal = container.querySelector("#sim-slider-val");
            const riyadhRate = container.querySelector("#sim-riyadh-rate");
            const rajhiRate = container.querySelector("#sim-rajhi-rate");
            const langBtn = container.querySelector("#sim-lang-btn");
            
            if (slider && sliderVal) {
                slider.addEventListener("input", (e) => {
                    const val = parseInt(e.target.value);
                    sliderVal.textContent = "$" + val.toLocaleString();
                    
                    const baseRiyadh = 3.4;
                    const baseRajhi = 3.6;
                    const discount = (val - 10000) / 90000 * 0.55;
                    
                    riyadhRate.textContent = (baseRiyadh - discount).toFixed(2) + "% APR";
                    rajhiRate.textContent = (baseRajhi - discount).toFixed(2) + "% APR";
                });
            }
            
            if (langBtn) {
                langBtn.addEventListener("click", () => {
                    const screen = container.querySelector(".ratehammer-screen");
                    if (screen) {
                        screen.classList.toggle("rtl-mode");
                        if (screen.classList.contains("rtl-mode")) {
                            langBtn.textContent = "English";
                            container.querySelector(".slider-lbl").textContent = "اختر مبلغ القرض";
                            container.querySelector(".canvas-lbl").textContent = "ارسم توقيعك أدناه:";
                        } else {
                            langBtn.textContent = "العربية";
                            container.querySelector(".slider-lbl").textContent = "Select Loan Amount";
                            container.querySelector(".canvas-lbl").textContent = "Draw signature below:";
                        }
                    }
                });
            }
        }
        
        // 5. CRUST Pizza delivery route tracking animation
        if (projectId === "crustpizza") {
            const moto = container.querySelector("#sim-delivery-moto");
            if (moto) {
                let currentPos = 15;
                let direction = 1;
                
                const driveLoop = setInterval(() => {
                    if (!moto.isConnected) {
                        clearInterval(driveLoop);
                        return;
                    }
                    currentPos += direction * 2;
                    if (currentPos >= 76) {
                        direction = -1;
                        moto.style.transform = "scaleX(-1)";
                    } else if (currentPos <= 15) {
                        direction = 1;
                        moto.style.transform = "scaleX(1)";
                    }
                    moto.style.left = currentPos + "%";
                }, 180);
            }
        }
    }
    
    // Close all mobile inline preview accordions
    function closeAllMobilePreviews() {
        const mobilePreviews = document.querySelectorAll(".project-mobile-preview");
        mobilePreviews.forEach(preview => {
            preview.classList.remove("open");
            preview.innerHTML = "";
            preview.style.maxHeight = "0px";
            preview.style.padding = "0px";
        });
    }
    
    // Function to load project details into the iPhone Screen with smooth transitions
    function loadProjectScreen(projectId, clickedCard = null) {
        const data = projectsData[projectId];
        if (!data) return;
        
        const isMobile = window.innerWidth <= 1024;
        
        if (isMobile && clickedCard) {
            closeAllMobilePreviews();
            
            const mobilePreviewContainer = clickedCard.querySelector(".project-mobile-preview");
            if (mobilePreviewContainer) {
                mobilePreviewContainer.innerHTML = `
                    <div class="mobile-simulator-wrapper">
                        <div class="iphone-screen">
                            ${data.htmlTemplate}
                        </div>
                    </div>
                `;
                mobilePreviewContainer.classList.add("open");
                mobilePreviewContainer.style.maxHeight = "500px";
                mobilePreviewContainer.style.padding = "1rem 0";
                
                // Bind interactions to inline mobile card preview container
                bindSimulatorInteractions(mobilePreviewContainer, projectId);
            }
        } else {
            // Desktop Sticky Simulator
            closeAllMobilePreviews();
            
            // Trigger fade out
            screenContainer.style.opacity = 0;
            screenContainer.style.transform = "translateY(8px)";
            
            setTimeout(() => {
                // Update Desktop Simulator Screen
                screenContainer.innerHTML = data.htmlTemplate;
                
                // Bind interactions to desktop simulator screen
                bindSimulatorInteractions(screenContainer, projectId);
                
                // Trigger fade in
                screenContainer.style.opacity = 1;
                screenContainer.style.transform = "translateY(0)";
            }, 200);
        }
    }
    
    // Load default project (first one) on page load
    const initialActiveCard = document.querySelector(".project-card.active");
    if (initialActiveCard) {
        loadProjectScreen(initialActiveCard.getAttribute("data-id"), initialActiveCard);
    }
    
    // Register Card Click / Hover handlers
    projectCards.forEach(card => {
        const projectId = card.getAttribute("data-id");
        
        // Stop bubbling of clicks on links to prevent simulator resetting
        const innerLinks = card.querySelectorAll(".project-links a, .project-link");
        innerLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.stopPropagation();
            });
        });
        
        const activateCard = () => {
            if (card.classList.contains("active") && window.innerWidth > 1024) return;
            
            // Remove active status from other cards
            projectCards.forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            
            // Update device screen (handles desktop sticky vs mobile inline dynamically)
            loadProjectScreen(projectId, card);
        };
        
        card.addEventListener("click", activateCard);
        
        // Only trigger on hover for desktop screens to prevent mobile scrolling interference
        card.addEventListener("mouseenter", () => {
            if (window.innerWidth > 1024) {
                activateCard();
            }
        });
    });
    
    // Handle window resize dynamically to adjust active preview
    window.addEventListener("resize", () => {
        const activeCard = document.querySelector(".project-card.active");
        if (activeCard) {
            const activeId = activeCard.getAttribute("data-id");
            const isOpenMobile = activeCard.querySelector(".project-mobile-preview").classList.contains("open");
            
            if (window.innerWidth <= 1024 && !isOpenMobile) {
                loadProjectScreen(activeId, activeCard);
            } else if (window.innerWidth > 1024 && isOpenMobile) {
                loadProjectScreen(activeId);
            }
        }
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
                // Remove active status from others manually first to trigger clean slide down
                projectCards.forEach(c => c.classList.remove("active"));
                firstVisibleCard.classList.add("active");
                loadProjectScreen(firstVisibleCard.getAttribute("data-id"), firstVisibleCard);
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
