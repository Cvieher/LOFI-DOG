" use strict";
const backgroundMusic = new Audio("audio/lofi_song1.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

const musicBtn = document.getElementById("toggleMusicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    backgroundMusic.pause();
    musicBtn.textContent = "🎵 Play";
  } else {
    backgroundMusic.play();
    musicBtn.textContent = "⏸ Pause";
  }
  isPlaying = !isPlaying;
});

const dogImage = document.getElementById("dog");
const tail = document.getElementById("tail");

dogImage.addEventListener("mouseenter", () => {
  tail.classList.add("wagging");
});

dogImage.addEventListener("mouseleave", () => {
  tail.classList.remove("wagging");
});

const headButton = document.getElementById("head_button");
const eyesClosed = document.getElementById("eyes-closed");
const headSound = new Audio("audio/dog_bark1.mp3");
let headClickCount = 0;

const modalMessage = document.createElement("div");

modalMessage.id = "modalMessage";
modalMessage.style.position = "fixed";
modalMessage.style.top = "25%";
modalMessage.style.left = "50%";
modalMessage.style.transform = "translate(-50%, -50%)";
modalMessage.style.background = "rgba(61, 33, 5, 0.85)";
modalMessage.style.color = "bisque";
modalMessage.style.padding = "20px";
modalMessage.style.borderRadius = "10px";
modalMessage.style.fontSize = "27px";
modalMessage.style.textAlign = "center";
modalMessage.style.display = "none";
document.body.appendChild(modalMessage);

headButton.addEventListener("click", () => {
  headSound.play();
  headClickCount++;

  if (eyesClosed.style.display === "none" || eyesClosed.style.display === "") {
    eyesClosed.style.display = "block";
  } else {
    eyesClosed.style.display = "none";
  }
  setTimeout(() => {
    eyesClosed.style.display = "none";
  }, 3000);
  if (headClickCount === 5) {
    modalMessage.innerHTML =
      "🎉 ¡Congratulations!\n¡You obtained your certificate! 🎉";
    modalMessage.style.display = "block";
    setTimeout(() => {
      modalMessage.style.display = "none";
    }, 3000);
  }
  if (headClickCount >= 5) {
    headClickCount = 0;
  }
});

const tailButton = document.getElementById("tail_button");
const ladrido = document.getElementById("ladrido");
const tailSound = new Audio("audio/dog_bark.mp3");

tailButton.addEventListener("click", () => {

  tailSound.play();

  ladrido.style.display = "block";
  dogImage.style.display = "none";
  tail.style.display = "none";

  setTimeout(() => {
    ladrido.style.display = "none";
    dogImage.style.display = "block";
    tail.style.display = "block";
  }, 300);
});
