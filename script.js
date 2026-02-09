// Init Animations
AOS.init({ duration: 1000, once: true });

// Mobile Menu
const menuToggle = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
menuToggle.onclick = () => navLinks.classList.toggle('active');

// Back to Top Logic
const btt = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 500) btt.style.display = "flex";
    else btt.style.display = "none";
};
btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Counter Animation
const counters = document.querySelectorAll('.counter');
const runCounters = () => {
    counters.forEach(c => {
        const target = +c.getAttribute('data-target');
        const update = () => {
            const count = +c.innerText;
            const inc = target / 50;
            if (count < target) {
                c.innerText = Math.ceil(count + inc);
                setTimeout(update, 30);
            } else c.innerText = target;
        };
        update();
    });
};

// Start counters when in view
const statsSec = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        runCounters();
        observer.unobserve(statsSec);
    }
}, { threshold: 0.5 });
observer.observe(statsSec);

// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});
