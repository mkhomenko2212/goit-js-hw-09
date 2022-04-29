
const refs={ 
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyColorEl: document.querySelector("body"),
}

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener("click", () => {
  timerId = setInterval(() => { refs.bodyColorEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
    
    refs.startBtn.disabled = true;
});


refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
refs.startBtn.disabled = false;
});

