const box = document.getElementById("box");
const image = document.getElementById("weeknd-img");
const text = document.getElementById("text");
const song = document.getElementById("song");

box.addEventListener("mouseover", function () {
  image.style.height = "25rem";
  image.style.transition = "0.5s"
});

box.addEventListener("mouseout", function () {
  image.style.height = "20rem";
  image.style.transition = "0.5s"
});

box.addEventListener("mouseover", function () {
  text.style.opacity = "0";
});

box.addEventListener("mouseout", function () {
  text.style.opacity = "100";
});

function playAudio() { 
  song.play(); 
};

function pauseAudio() { 
  song.pause(); 
};

window.addEventListener('DOMContentLoaded', function(){
  song.pause();
})