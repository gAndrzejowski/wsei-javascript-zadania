document.addEventListener('DOMContentLoaded', () => {
    const width = document.getElementById('windowWidth');
    const height = document.getElementById('windowHeight');

    function adjustSize() {
        width.innerText = window.innerWidth;
        height.innerText = window.innerHeight;
    }
    adjustSize();
    window.addEventListener('resize', adjustSize);
})