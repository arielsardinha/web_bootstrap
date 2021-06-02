const target = document.getElementById('header')

window.addEventListener('scroll', function(){
    animeScroll()
})
function animeScroll(){
    const windwTop = window.pageYOffset;
    console.log(windwTop)
    if(windwTop > 89 ){
        target.classList.add('active')
    }else{
        target.classList.remove('active')
    }
}


// jQuery(document).ready(function($){
//     window.onscroll = function(){
//         if(window.pageYOffset > 140){
//             $('#header').addClass('active');
//         }else{
//             $('#header').removeClass('active');
//         }
//     }
// })