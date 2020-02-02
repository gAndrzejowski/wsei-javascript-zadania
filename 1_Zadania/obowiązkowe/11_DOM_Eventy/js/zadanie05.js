document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.box');
    const setRandomBackground = function() {
        var randomColor = "#" +
        Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    }
    divs.forEach(function(box){
        box.addEventListener('click', setRandomBackground);
    })
})