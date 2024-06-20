let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

document.getElementById('menu-toggle').addEventListener('click', function () {
    const navPopup = document.getElementById('nav-popup');
    if (navPopup.style.display === 'block') {
        navPopup.style.display = 'none';
    } else {
        navPopup.style.display = 'block';
    }
});
