// Mobile Menu Fix
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// FAQ Accordion Fix
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        if (count < target) {
            counter.innerText = Math.ceil(count + (target / 50));
            setTimeout(update, 30);
        } else { counter.innerText = target; }
    };
    update();
});

// Back to Top
const btt = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) { btt.style.display = "flex"; }
    else { btt.style.display = "none"; }
};
btt.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

AOS.init({ duration: 1000, once: true });
