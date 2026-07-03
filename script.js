// SCROLL REVEAL EFFECT
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// CLICK EFFECT (simple glow pop)
document.addEventListener("click", (e) => {
  const circle = document.createElement("div");
  circle.style.position = "absolute";
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
  circle.style.width = "10px";
  circle.style.height = "10px";
  circle.style.background = "#00ffcc";
  circle.style.borderRadius = "50%";
  circle.style.pointerEvents = "none";
  circle.style.transform = "translate(-50%, -50%)";
  circle.style.animation = "pop 0.6s ease-out forwards";

  document.body.appendChild(circle);

  setTimeout(() => circle.remove(), 600);
});

// particle-ish simple background (optional vibe)
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({length:60}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  r: Math.random()*2
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    ctx.fillStyle = "#00ffcc";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
    ctx.fill();

    p.y += 0.5;
    if(p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();

const words = [
    "Graphic Designer",
    "Video Editor",
    "Freelancer"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let currentLetters = "";

function type(){

    if(wordIndex == words.length){
        wordIndex = 0;
    }

    currentWord = words[wordIndex];

    currentLetters = currentWord.slice(0, ++letterIndex);

    document.getElementById("typing").textContent = currentLetters;

    if(currentLetters.length == currentWord.length){

        wordIndex++;

        letterIndex = 0;

        setTimeout(type,1000);

    }else{

        setTimeout(type,100);

    }

}

type();

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressbar").style.width = progress + "%";
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".card img");
const closeBtn = document.querySelector(".close");

images.forEach(img => {

    img.onclick = function(){

        modal.style.display = "block";

        modalImg.src = this.src;

    }

});

closeBtn.onclick = function(){

    modal.style.display = "none";

}

modal.onclick = function(e){

    if(e.target == modal){

        modal.style.display = "none";

    }

}

const videos=document.querySelectorAll(".portfolio-video");

const modalVideo=document.getElementById("videoModal");

const popup=document.getElementById("popupVideo");

const closeVideo=document.querySelector(".close-video");

videos.forEach(video=>{

video.addEventListener("click",()=>{

modalVideo.style.display="flex";

popup.src=video.querySelector("source").src;

popup.play();

});

});

closeVideo.onclick=function(){

popup.pause();

modalVideo.style.display="none";

popup.src="";

}

modalVideo.onclick=function(e){

if(e.target===modalVideo){

popup.pause();

popup.src="";

modalVideo.style.display="none";

}

}

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);

});