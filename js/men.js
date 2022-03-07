var text = document.getElementById('text');
var word = text.getElementsByTagName('span');
var i = 0;
function rotator(){
  word[i].style.display = 'none';
  i = (i+1)%word.length;
  word[i].style.display = 'initial';
}
setInterval(rotator, 800);

let btn1 = document.querySelector('.button1');
function HomePage(){
  document.location.href = "index.html";
}

btn1.addEventListener('click', HomePage);

let btn2 = $('.button2').click(function(){
  $(location).attr('href', 'product.html');
});
