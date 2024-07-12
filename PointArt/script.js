
document.getElementById('menu-toggle').addEventListener('click', function () {
    const navPopup = document.getElementById('nav-popup');
    if (navPopup.style.display === 'block') {
        navPopup.style.display = 'none';
    } else {
        navPopup.style.display = 'block';
    }
});


