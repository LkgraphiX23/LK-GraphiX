// Initialize AOS
AOS.init({ duration: 1000, once: true });

// Mobile Menu
const menuToggle = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});

// Back to Top Button
const btt = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) { btt.style.display = "flex"; }
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

// Start counters on scroll
const statsSec = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCount();
        observer.unobserve(statsSec);
    }
}, { threshold: 0.5 });
observer.observe(statsSec);
