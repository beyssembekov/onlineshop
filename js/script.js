//document.getElementById("brand").style.fontFamily = "Impact,Charcoal,sans-serif";
let seilings = document.getElementById('brandss').innerHTML = "The Best Seilings";
let styleSeilings = document.getElementById('brandss').style.color = "#e74c3c";
let btn1 = document.querySelector('.button1');
function transitionFirstPage(){
  document.location.href = "index.html";
}

btn1.addEventListener('click', transitionFirstPage);

let btn2 = $('.button2').click(function(){
  $(location).attr('href', 'product.html');
});

let btn3 = $('.button3').click(function(){
  $(location).attr('href', 'men.html');
});

$(document).mousemove(function(e){
  $('h1').css({'letter-spacing' : '' + (e.pageY)/10 + 'px'})
});

function bigImg(x) {
x.style.height = "400px";
x.style.width = "350px";
}

function normalImg(x) {

x.style.height = "350px";
x.style.width = "100%";
}
$(document).ready(function(){
    $('.slider').slick({
      slidesToShow: 2,
      centerMode: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });
});

//function soundClick() {
  //var audio = new Audio(); // Создаём новый элемент Audio
  //audio.src = 'music1.mp3'; // Указываем путь к звуку "клика"
  //audio.pause();
//}
function play() {
       var audio = document.getElementById("audio");
       audio.play();
     }
