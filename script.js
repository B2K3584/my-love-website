const PASSWORD = "love123"; // CHANGE THIS

const passwordScreen = document.getElementById("passwordScreen");
const site = document.getElementById("site");
const input = document.getElementById("passwordInput");
const unlock = document.getElementById("unlockBtn");
const error = document.getElementById("error");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const letter = `I don't know if a website can really explain what you mean to me,
but I wanted to make something that keeps a few of our memories in one place.

Every date here is more than just a date.
It's a little piece of our story that I never want to forget.

Thank you for being you. ❤️`;

document.getElementById("letterText").textContent = letter;

function openSite(){
  passwordScreen.classList.add("hidden");
  site.classList.remove("hidden");
  window.scrollTo(0,0);
  music.play().catch(()=>{});
}

function checkPassword(){
  if(input.value === PASSWORD){
    openSite();
  }else{
    error.textContent = "That's not the secret password ♡";
    input.value = "";
    input.focus();
  }
}

unlock.addEventListener("click", checkPassword);
input.addEventListener("keydown", e => {
  if(e.key === "Enter") checkPassword();
});

musicBtn.addEventListener("click", async ()=>{
  if(music.paused){
    await music.play();
    musicBtn.textContent = "Ⅱ";
  }else{
    music.pause();
    musicBtn.textContent = "♫";
  }
});

music.addEventListener("play", ()=> musicBtn.textContent = "Ⅱ");
music.addEventListener("pause", ()=> musicBtn.textContent = "♫");
