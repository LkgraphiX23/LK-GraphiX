// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => { navLinks.classList.toggle('active'); });

// Counting Animation
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
            } else { counter.innerText = target; }
        };
        updateCount();
    });
};

// Start when scrolled
const statsSection = document.querySelector('.stats');
const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        startCount();
        observer.unobserve(statsSection);
    }
}, { threshold: 0.5 });
observer.observe(statsSection);

AOS.init({ duration: 1000, once: true });
