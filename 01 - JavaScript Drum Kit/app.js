const $keys = document.querySelector(".keys");

$keys.addEventListener("transitionend", handleTransitionEnd);

window.addEventListener("keydown", handleKeyDown);

function handleTransitionEnd(e) {
    if (!e.target.matches(".key")) return;
    if (e.propertyName !== "transform") return;
    
    e.target.classList.remove("playing");
}

function handleKeyDown(e) {
    const $audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const $key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!$audio) return;

    $audio.currentTime = 0;
    $audio.play();
    $key.classList.add("playing");
}





