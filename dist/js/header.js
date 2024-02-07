const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    (window.scrollY > 100 && header.classList.add('bg-true'));
    (window.scrollY <= 100 && header.classList.remove('bg-true'));
})
