
var emojisArr = ["fa-regular fa-face-angry", "fa-regular fa-face-frown", "fa-regular fa-face-meh", "fa-regular fa-face-smile", "fa-regular fa-face-laugh"]
var starCount;
var targetEmoji = document.getElementById('emoji')
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var section = document.getElementById('sec');
var allStars = section.querySelectorAll('i');
function updateEmoji() {
    if (starCount === 1) {
        for (i = 0; i < allStars.length; i++) {
            allStars[i].className = 'fa-regular fa-star';
        }
        targetEmoji.className = emojisArr[starCount - 1]
        one.className = 'fa-solid fa-star';
    }
    else if (starCount === 2) {
        for (i = 0; i < allStars.length; i++) {
            allStars[i].className = 'fa-regular fa-star';
        }
        targetEmoji.className = emojisArr[starCount - 1]
        one.className = 'fa-solid fa-star';
        two.className = 'fa-solid fa-star';
    }
    else if (starCount === 3) {
        for (i = 0; i < allStars.length; i++) {
            allStars[i].className = 'fa-regular fa-star';
        }
        targetEmoji.className = emojisArr[starCount - 1]
        one.className = 'fa-solid fa-star';
        two.className = 'fa-solid fa-star';
        three.className = 'fa-solid fa-star';
    }
    else if (starCount === 4) {
        for (i = 0; i < allStars.length; i++) {
            allStars[i].className = 'fa-regular fa-star';
        }
        targetEmoji.className = emojisArr[starCount - 1]
        one.className = 'fa-solid fa-star';
        two.className = 'fa-solid fa-star';
        three.className = 'fa-solid fa-star';
        four.className = 'fa-solid fa-star';
    }
    else if (starCount === 5) {
        for (i = 0; i < allStars.length; i++) {
            allStars[i].className = 'fa-regular fa-star';
        }
        targetEmoji.className = emojisArr[starCount - 1]
        one.className = 'fa-solid fa-star';
        two.className = 'fa-solid fa-star';
        three.className = 'fa-solid fa-star';
        four.className = 'fa-solid fa-star';
        five.className = 'fa-solid fa-star';
    }
}
