document.addEventListener('DOMContentLoaded', function () {
    var contentContainer = document.querySelector('.content-container');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) { // Ajuste o valor conforme necessário
            contentContainer.classList.add('hidden');
        } else {
            contentContainer.classList.remove('hidden');
        }
    });
});
