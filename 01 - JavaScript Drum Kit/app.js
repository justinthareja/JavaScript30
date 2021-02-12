(function () {
    document.body.addEventListener("keydown", handleKeyDown);
    document.body.addEventListener("keyup", handleKeyUp);
    
    function handleKeyDown(e) {
        toggleStyle(e.keyCode);
        play(e.keyCode);
    }
    
    function handleKeyUp(e) {
        toggleStyle(e.keyCode);
    }
    
    function toggleStyle(id) {
        var $key = getKey(id);
        
        if (!$key) {
            return;
        }
            
        $key.classList.toggle("playing");
    }
    
    
    function getKey(id) {
        return document.querySelector(`.key[data-key="${id}"]`);
    }
    
    function getAudio(id) {
        return document.querySelector(`audio[data-key="${id}"]`);
    }
    
    
    async function play(id) {
        var $audio = getAudio(id);
    
        if (!$audio) {
            return false;
        }
        
        try {
            $audio.currentTime = 0;
            await $audio.play();
        } catch(err) {
            
        }
    }
})();





