document.addEventListener('DOMContentLoaded', () => {

    function randomizeParent() {

        const parent = this.parentElement;
        const randomColor = '#' + 
        Math.floor(Math.random()*16777215).toString(16);
        parent.style.backgroundColor = randomColor;
    }

    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener('click', randomizeParent);
    })
})