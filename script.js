let logoFondoRosa = document.querySelector(".imgFondoRosa");
let logoFondoAzul = document.querySelector(".imgFondoAzul");
let logoFondoGris = document.querySelector(".imgFondoGris");
let body = document.body;
var pageHeight = window.innerHeight;


if (logoFondoRosa) {
    body.classList.add('fondoRosa');
}

document.addEventListener('scroll', function () {
    document.body.scrollTop = 0;
});

document.addEventListener('wheel', function (e) {
    //console.log(e.deltaY);
    if (e.deltaY > 0) {
        scrollDown();
    } else {
        scrollUp();
    }
}
);

function scrollDown() {
    document.body.style.transform = 'translate3d(0px, -' + pageHeight + 'px, 0px)';
    body.classList.add('fondoAzul');
    logoFondoAzul.classList.add('show');
}

function scrollUp() {
    document.body.style.transform = 'translate3d(0px, 0px, 0px)';
    body.classList.remove('fondoAzul');
}