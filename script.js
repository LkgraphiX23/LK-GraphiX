// Back to Top logic
const backToTop = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 400) { backToTop.style.display = "flex"; }
    else { backToTop.style.display = "none"; }
};
backToTop.onclick = () => { window.scrollTo({ top: 0, behavior: 'smooth' }); };

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.onclick = () => { navLinks.classList.toggle('active'); };

// Counter
const counters = document.querySelectorAll('.counter');
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

AOS.init({ duration: 1000, once: true });
