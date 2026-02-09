// AOS Animation
AOS.init({ duration: 1000, once: true });

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });

// FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Back to Top Button Logic
const btt = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 500) { btt.style.display = "flex"; }
    else { btt.style.display = "none"; }
};
btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Stats Counter
const counters = document.querySelectorAll('.counter');
const startCount = () => {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(update, 20);
            } else { counter.innerText = target; }
        };
        update();
    });
};

const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) { startCount(); observer.unobserve(statsSection); }
}, { threshold: 0.5 });
observer.observe(statsSection);
