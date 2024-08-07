// Esperar até que a janela seja completamente carregada
window.addEventListener('load', function() {
    // Ocultar o preloader
    document.getElementById('preloader').style.display = 'none';
    // Mostrar o conteúdo principal
    document.getElementById('content').classList.remove('hidden');
});


document.addEventListener('DOMContentLoaded', () => {
    const pointGroups = document.querySelectorAll('.pointGroup');
    
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    pointGroups.forEach(pointGroup => {
        observer.observe(pointGroup);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n > slides.length) { 
            clearInterval(slideInterval);  // Pare o slideshow quando chegar ao último slide
            slideIndex = slides.length;
        } 
        if (n < 1) { 
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";  // Use 'flex' para garantir que o display funcione corretamente
    }

    document.querySelector('.prev').addEventListener('click', () => {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        plusSlides(1);
    });

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

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

    const slideInterval = setInterval(() => {
        plusSlides(1);
    }, 3000);
});