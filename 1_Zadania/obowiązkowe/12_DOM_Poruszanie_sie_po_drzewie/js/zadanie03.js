window.addEventListener('DOMContentLoaded', () => {

    function colorizeListElements() {
        const list = this.firstElementChild;
        for (let li of list.children) {
            li.style.backgroundColor = "green";
        }
        list.firstElementChild.style.backgroundColor = "red";
        list.lastElementChild.style.backgroundColor = "blue";
    }

    document.querySelectorAll('.listContainer').forEach(container => {
        container.addEventListener('mouseover', colorizeListElements);
    })
})