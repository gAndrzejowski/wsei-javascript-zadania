document.addEventListener('DOMContentLoaded', () => {

    function toggleSibling(event) {
        event.stopImmediatePropagation();
        const sibling = this.nextElementSibling;
        if (!sibling) return;
        if (sibling.style.visibility !== "hidden") {
            sibling.style.visibility = "hidden";
        }
        else {
            sibling.style.visibility = "visible";
        }
    }

    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener('click', toggleSibling);
    })
})