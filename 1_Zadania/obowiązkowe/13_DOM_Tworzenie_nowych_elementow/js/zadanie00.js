document.addEventListener('DOMContentLoaded', () => {
    function removeArticle() {
        const row = this.parentElement.parentElement;
        const table = row.parentElement;
        table.removeChild(row);
    }

    document.querySelectorAll(".deleteBtn").forEach(deleteBtn => {
        console.log(deleteBtn)
        deleteBtn.addEventListener("click", removeArticle);
    })
})