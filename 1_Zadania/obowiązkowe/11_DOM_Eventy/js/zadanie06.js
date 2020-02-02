document.addEventListener('DOMContentLoaded', () =>{
    const box = document.getElementById('box');
    const globalX = document.getElementById('globalX');
    const globalY = document.getElementById('globalY');
    const localX = document.getElementById('localX');
    const localY = document.getElementById('localY');
    box.addEventListener('mousemove', function(event) {
        globalX.innerText = event.clientX;
        globalY.innerText = event.clientY;
        localX.innerText = event.offsetX;
        localY.innerText = event.offsetY;
    });
});