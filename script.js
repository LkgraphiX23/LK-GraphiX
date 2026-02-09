// Back to Top Logic (Fixed)
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// FAQ Accordion Logic
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// Counter Animation Logic
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCount = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Intersection Observer for Stats
const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCount();
        observer.unobserve(statsSection);
    }
}, { threshold: 0.5 });

if(statsSection) {
    observer.observe(statsSection);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// AOS Animation Initializing
AOS.init({
    duration: 1000,
    once: true
});
