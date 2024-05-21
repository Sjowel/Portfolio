let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let skyline = document.getElementById('skyline');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1 + 'px';
    moon.style.left = value * 1 + 'px';
    skyline.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1.05 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';

})

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Als het element in beeld komt, voeg de 'visible' klasse toe en markeer het als 'in view'
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.dataset.inView = 'true'; // Gebruik dataset voor markeren
            } else {
                // Verwijder de markering 'in view' onmiddellijk wanneer het uit beeld gaat
                entry.target.dataset.inView = 'false';
                
                // Stel een timeout in om na 5 seconden te checken
                setTimeout(() => {
                    // Check of het element nog steeds gemarkeerd is als 'niet in view'
                    if (entry.target.dataset.inView === 'false') {
                        entry.target.classList.remove('visible');
                    }
                }, 5000); // 5 seconden vertraging
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    // Selecteer alle elementen die je wilt observeren en voeg ze toe aan de observer
    document.querySelectorAll('.outcome-link').forEach(link => {
        observer.observe(link);
    });
});
