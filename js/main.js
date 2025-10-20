document.querySelectorAll('.menu-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.style.opacity = window.scrollY > 50 ? '0.95' : '1';
});
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
if (isTouchDevice) {
    const sidebar = document.querySelector('.sidebar');
    sidebar.addEventListener('click', () => {
        sidebar.classList.toggle('expanded');
    });
}