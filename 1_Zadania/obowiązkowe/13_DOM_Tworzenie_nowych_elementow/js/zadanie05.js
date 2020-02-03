document.addEventListener('DOMContentLoaded', () => {
    function moveMe() {
        const liElement = this.parentElement;
        const currentList = liElement.parentElement;
        
        const container = currentList.parentElement;
        const otherList = (container.nextElementSibling ||
            container.previousElementSibling).firstElementChild;

        console.log(otherList);

        currentList.removeChild(liElement);
        otherList.appendChild(liElement);
    };

    document.querySelectorAll('.moveBtn').forEach(button => {
        button.addEventListener('click', moveMe);
    })
})