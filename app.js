const tom1 = document.getElementById('tom1');
const tom2 = document.getElementById('tom2');
const tom3 = document.getElementById('tom3');
const tom4 = document.getElementById('tom4');
const snare = document.getElementById('snare');
const kick = document.getElementById('kick');
const crash = document.getElementById('crash');

tom1.addEventListener('click',function(){
    var audio = new Audio('sounds/tom1.mp3');
    audio.play();
})
tom2.addEventListener('click',function(){
    var audio = new Audio('sounds/tom2.mp3');
    audio.play();
})
tom3.addEventListener('click',function(){
    var audio = new Audio('sounds/tom3.mp3');
    audio.play();
})
tom4.addEventListener('click',function(){
    var audio = new Audio('sounds/tom4.mp3');
    audio.play();
})
crash.addEventListener('click',function(){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
})
snare.addEventListener('click',function(){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
})
kick.addEventListener('click',function(){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
})