// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.onclick = () => {
        navLinks.classList.toggle('active');
    };
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});

// Back to Top Logic
const backToTop = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
};
backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Counter Animation
const counters = document.querySelectorAll('.counter');
const startCount = () => {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

// Start counter when visible
const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCount();
        observer.unobserve(statsSection);
    }
}, { threshold: 0.5 });
if(statsSection) observer.observe(statsSection);

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.onclick = () => {
        item.classList.toggle('active');
    };
});

// AOS Initialization
AOS.init({ duration: 1000, once: true });
