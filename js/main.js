// evento de scroll
// debounce
const target = document.getElementById('header')
const debounce = function (func, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
// scroll
// passa a funcao para travar o tempo de execucao do chamado
window.addEventListener('scroll', debounce(function () {
    animeScroll()
}, 200))// define o tempo de mile segundos vai ter de atraso
function animeScroll() {
    const windwTop = window.pageYOffset;
    if (windwTop > 89) {
        target.classList.add('active')
    } else {
        target.classList.remove('active')
    }
}

jQuery(document).ready(function ($){ // jqyery global
    // isotope
    // pega os botoes e seleciona o que o usuario pegar
    let btns = $("#servicos .button-group button");
    btns.click(function (e){
        $('#servicos .button-group button').removeClass('active')
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $("#servicos .grid").isotope({
            filter:selector,
        })
    }) 
    $(window).on('load',function(){
        $("#servicos .grid").isotope({
            filter:"*",
        })
    })
    // magnify
    $('.grid .popup-link').magnificPopup({
        type: "image",
        gallery:{
            enabled:true,
            tPrev: 'Anterior',
            tNext:'Próxima',
            tCounter:'%curr% de %total%',
        },
    })
    // carousel
    $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(".owl-carousel").owlCarousel({
        loop: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        dots: true,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    });
})





