document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button, index) { 
        button.addEventListener('click', function(){
            const counter = document.querySelectorAll('.counter')[index];
            const currentCount = Number(counter.innerHTML);
            counter.innerHTML = currentCount + 1;
        });
    });
});