window.addEventListener("load", welcomeMessage);

// استخدمت جافا سكريبت لإنشاء رسالة ترحيب
function welcomeMessage() {
  alert("تم عمل الموقع بكل حب من اجل مس فاطمه❤");
}

let backgroundMusic = document.getElementById('background-music');
let toggleButton = document.getElementById('toggle-music');

let isPlaying = true;

function toggleMusic() {
  if (isPlaying) {
    backgroundMusic.pause();
    toggleButton.innerHTML = '▶️Play Music';
    isPlaying = false;
  } else {
    backgroundMusic.play();
    toggleButton.innerHTML = '⏸Stop Music';
    isPlaying = true;
  }
}