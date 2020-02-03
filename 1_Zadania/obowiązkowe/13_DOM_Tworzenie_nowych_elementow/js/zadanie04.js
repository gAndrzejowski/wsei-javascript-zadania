document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('remove');
    const list = document.getElementsByClassName('list')[0];

    button.addEventListener('click', function() {
        for (let child of Array.from(list.children)) {
            list.removeChild(child);
        }
    });
});