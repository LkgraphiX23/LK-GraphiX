// Back to Top Logic
const backToTop = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) { backToTop.style.display = "flex"; }
    else { backToTop.style.display = "none"; }
};
backToTop.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

// FAQ Logic
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => { item.classList.toggle('active'); });
});

// Counter Logic
const counters = document.querySelectorAll('.counter');
const startCount = () => {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + (target / 100));
                setTimeout(update, 20);
            } else { counter.innerText = target; }
        };
        update();
    });
};

// Intersection Observer for Stats
const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) { startCount(); observer.unobserve(statsSection); }
}, { threshold: 0.5 });
if(statsSection) observer.observe(statsSection);

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle) {
    menuToggle.onclick = () => { navLinks.classList.toggle('active'); };
}

AOS.init({ duration: 1000, once: true });
