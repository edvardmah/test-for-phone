var butonExploreaza = document.getElementById('explore');
var melodie = document.getElementById('music');

butonExploreaza.addEventListener('click', function(event) {
    event.preventDefault();

    setTimeout(function() {
        melodie.play();

        var sectiunea = document.getElementById('car');
        var pozitie = sectiunea.offsetTop;

        window.scrollTo({
            top: pozitie,
            behavior: 'smooth'
        });
    }, 100);
});

var butoane = document.querySelectorAll('text_nav');

butoane.forEach(function(buton) {
    buton.addEventListener('click', function(event) {
        event.preventDefault();
        var sectiuneId = this.getAttribute('href').substring(1);
        var sectiune = document.getElementById(sectiuneId);
        var pozitie = sectiune.offsetTop;

        window.scrollTo({
            top: pozitie,
            behavior: 'smooth'
        });
    });
});

const filterButton = document.getElementById('filterButton');
const arrowIcon = document.getElementById('arrowIcon');
const optionsList = document.getElementById('optionsList');

filterButton.addEventListener('click', function() {
    if (optionsList.classList.contains('show_options')) {
        optionsList.classList.remove('show_options');
        arrowIcon.src = "./img/ico/arrow-down.svg";
    } else {
        optionsList.classList.add('show_options');
        arrowIcon.src = "./img/ico/arrow-up.svg";
    }
});
