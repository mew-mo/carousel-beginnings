// Central Core Custom Javascript
var runCompletion = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            // do something
            console.log('running');
            var audio = new Audio('../js/sound.mp3');
            audio.play();
        }
    };
})();
// iife ENDS
