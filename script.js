// Initialize AOS with Professional Duration
AOS.init({
    duration: 1000, // Standard speed (not too fast, not too slow)
    once: true,     // Animation only plays once for a clean look
    offset: 120
});

// Mobile Menu Fix
document.getElementById('mobileMenu').onclick = () => {
    document.getElementById('navLinks').classList.toggle('active');
};

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    item.onclick = () => {
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    };
});

// Counter Animation Logic
const counters = document.querySelectorAll('.counter');
const startCounter = () => {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 60;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(update, 35);
            } else { counter.innerText = target; }
        };
        update();
    });
};

// Start counter on scroll
const statsSec = document.querySelector('.stats');
const obs = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) {
        startCounter();
        obs.unobserve(statsSec);
    }
}, { threshold: 0.5 });
obs.observe(statsSec);

// Back to Top Button
window.onscroll = () => {
    const btt = document.getElementById('backToTop');
    if (window.scrollY > 500) btt.style.display = "flex";
    else btt.style.display = "none";
};
document.getElementById('backToTop').onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
