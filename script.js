// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
const startCount = () => {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 50;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

// Intersection Observer for Stats
const statsSec = document.querySelector('.stats');
if(statsSec) {
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            startCount();
            observer.unobserve(statsSec);
        }
    }, { threshold: 0.5 });
    observer.observe(statsSec);
}

// Back to Top
const btt = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) btt.style.display = "flex";
    else btt.style.display = "none";
};
btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// AOS Animation Init
AOS.init({ duration: 1000, once: true });
