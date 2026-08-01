// ============================================
// 🔧 CONFIG.JS – EDIT THIS FOR EACH CLIENT
// ============================================

const CONFIG = {
    // ===== BRAND INFO =====
    brandName: "TESFAYE",
    trainerName: "Coach Tesfaye",
    tagline: "Strength for Life, Not Just the Gym",
    heroTitle: "BUILD YOUR STRONGES BODY",
    
    // ===== HERO =====
    heroTitle: "BUILD YOUR STRONGEST BODY",
    heroSubtitle: "Strength for Life, Not Just the Gym",
    
    // ===== SERVICES =====
    services: [
        { name: "1-on-1 Coaching", icon: "💪", desc: "Personalized training sessions" },
        { name: "Online Training", icon: "📱", desc: "Expert coaching anywhere" },
        { name: "Group Training", icon: "👥", desc: "High-energy team sessions" },
        { name: "Nutrition Guidance", icon: "🥗", desc: "Custom meal plans" },
        { name: "Custom Programs", icon: "🎯", desc: "Tailored to your goals" }
    ],
    
    // ===== PRICING (in Birr) =====
    pricing: [
        { plan: "Hourly Session", price: "800", features: ["1-on-1 coaching", "Custom workout plan"] },
        { plan: "Daily Pass", price: "1,500", features: ["All services included", "Full gym access"] },
        { plan: "Monthly Unlimited", price: "12,000", features: ["Unlimited sessions", "Full meal plan"] }
    ],
    
    // ===== PACKAGES =====
    packages: [
        { name: "Fat Loss", price: "8,000", icon: "🔥" },
        { name: "Muscle Gain", price: "10,000", icon: "💪" },
        { name: "Mobility", price: "6,000", icon: "🦵" },
        { name: "Endurance", price: "7,000", icon: "⚡" },
        { name: "Elite Package", price: "15,000", icon: "🌟" }
    ],
    
    // ===== TESTIMONIALS =====
    testimonials: [
        { name: "Biruk", location: "Addis Ababa", text: "Lost 15kg in 3 months!" },
        { name: "Samrawit", location: "Addis Ababa", text: "Best trainer ever!" },
        { name: "Dawit", location: "Addis Ababa", text: "Online training worked perfectly!" }
    ],
    
    // ===== FAQ =====
    faqs: [
        { question: "Do I need my own equipment?", answer: "Not at all! I provide everything." },
        { question: "How often should I train?", answer: "3-4 sessions per week recommended." },
        { question: "Can I do online training?", answer: "Yes, I offer online coaching." }
    ],
    
    // ===== FITNESS TIPS =====
    tips: [
        "Hydration is Key – Drink 2-3 liters daily",
        "Consistency Over Intensity – Train 3x a week",
        "Protein After Workout – Eat within 30 minutes"
    ],
    
    // ===== CONTACT =====
    email: "tesfayeacheramto@gmail.com",
    phone: "+251911901295",
    location: "Addis Ababa, Ethiopia",
    
    // ===== SOCIAL MEDIA =====
    social: {
        telegram: "https://t.me/tesfaye",
        tiktok: "https://tiktok.com/@tesfaye",
        facebook: "https://facebook.com/tesfaye"
    },
    
    // ===== DEVELOPER (YOUR INFO) =====
    developer: {
        name: "Sisay Abebayew",
        email: "sisayabebayew@gmail.com",
        phone: "+251965681966",
        tagline: "Building digital solutions for your business",
        social: {
            instagram: "https://instagram.com/@bboysis",
            tiktok: "https://tiktok.com/@bboysis",
            telegram: "https://t.me/@bboysis"
        }
    }
};

// Make it available globally
if (typeof module !== 'undefined') {
    module.exports = CONFIG;
}