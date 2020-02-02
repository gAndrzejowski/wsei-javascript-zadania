// Zadanie 0a

// const parents = document.querySelectorAll('.parent');
// parents.forEach(parent => {
//     const child = parent.getElementsByClassName('children')[0];
//     parent.addEventListener('mousemove', () => {
//         child.style.display = "block";
//     });
//     parent.addEventListener('mouseleave', () => {
//         child.style.display = "none";
//     });
// });

// Zadanie 0b

const parents2 = document.querySelectorAll('.parent');
parents2.forEach(parent => {
    
    parent.addEventListener('mousemove', function() {
        
        const child = this.querySelector('.children');
        
        function showChildrenElement() {
            child.style.display = "block";
        };
        showChildrenElement();
    })
    parent.addEventListener('mouseleave', function() {
        
        const child = this.querySelector('.children');
            
        function hideChildrenElement() {
            child.style.display = "none";
        };
        hideChildrenElement();
    });
})