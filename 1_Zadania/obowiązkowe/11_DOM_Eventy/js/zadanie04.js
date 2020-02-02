document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    function addOne() {
        const counter = document.querySelector('.counter');
        counter.innerHTML = Number(counter.innerHTML) + 1;
    }
    buttons.forEach(function(button) {
        button.addEventListener('click', addOne);
    });
});