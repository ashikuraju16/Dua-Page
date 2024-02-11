let audio = document.getElementById("audio");
let playButton = document.getElementById("play-button");
let stopButton = document.getElementById("stop-button");

/* -------------------------------------------------------------------------- */


playButton.addEventListener("click", () => {
    audio.play();
    playButton.style.display = 'none';
    stopButton.style.display = 'block';
})

document.getElementById("stop-button").addEventListener("click", () => {
    audio.pause();
    playButton.style.display = 'block';
    stopButton.style.display = 'none';
})

