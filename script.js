document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // Muda de slide a cada 3 segundos
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navPopup = document.getElementById('nav-popup');
    
    menuToggle.addEventListener('click', () => {
        navPopup.classList.toggle('show');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navPopup.classList.remove('show');
        }
    });
});
