document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".button");
    const menu = document.querySelector(".menu");

    let nextElement = 1;

    function addElementToMenu() {
        const newLi = document.createElement('li');
        newLi.innerText = `Element ${nextElement} - w chwili dodania było ${menu.childElementCount} elementów.`;
        menu.appendChild(newLi);
        nextElement++;
    }

    button.addEventListener('click', addElementToMenu);

});