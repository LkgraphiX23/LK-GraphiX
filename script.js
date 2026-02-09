// Initialize Animations (Professional Speed)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Mobile Menu Toggle Logic
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change bars icon to times
    const icon = mobileMenu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu on link click (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// FAQ Accordion Logic
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});

// Counter Animation Logic
const counters = document.querySelectorAll('.counter');
const startCounter = () => {
    counters.forEach(counter => {
        const update = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / 50;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(update, 30);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
};

// Start counters when stats section is visible
const statsSec = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCounter();
        observer.unobserve(statsSec);
    }
}, { threshold: 0.5 });
observer.observe(statsSec);

// Back to Top functionality
const btt = document.getElementById('backToTop');
window.onscroll = () => {
    if (window.scrollY > 500) {
        btt.style.display = "flex";
    } else {
        btt.style.display = "none";
    }
};
btt.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
