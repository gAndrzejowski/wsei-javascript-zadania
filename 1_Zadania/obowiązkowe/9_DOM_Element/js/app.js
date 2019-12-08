document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     // Zadanie 0

     function getDatasInfo(elements) {
         const dataAttributes = [];
         for (let i=0; i<elements.length; i++) {
             dataAttributes.push(elements[i].getAttribute('data-color'));
         }
         return dataAttributes;
     }

     console.log(
        getDatasInfo(links)
     );
      

     // Zadanie 1

     console.log(homeElement);
     console.log(childElements);
     console.log(banner);
     console.log(blocks);
     console.log(links);
     for (let child of childElements) console.log(child.tagName, child.getAttribute('class'));
     for (let block of blocks) console.log(block.tagName, block.getAttribute('class'));
     for (let link of links) console.log(link.tagName, link.getAttribute('class'));

     // Zadanie 2

     for (let block of blocks) {
         console.log(block.innerHTML);
         console.log(block.outerHTML);
         block.innerHTML = 'Nowa wartość diva o klasie blocks';
     }

     // Zadanie 3

     const mainFooter = document.getElementById('mainFooter');
     const getId = function(element) {
         return element.id;
     } 
     console.log(getId(mainFooter));

     // Zadanie 4

     const getTags = function(elements) {
         const tags = [];
         for (let element of elements) {
             tags.push(element.tagName);
         }
         return tags;
     }
     console.log(getTags(childElements));

     // Zadanie 5

     const getClassInfo  = function(element) {
        const classList = element.classList;
        let classes = [];
        classList.forEach(function(className) {
            classes.push(className);
        });
        return classes;
     }
    console.log(getClassInfo(banner));

    // Zadanie 6

    const liInNav = document.querySelectorAll('nav li');
    const setDataDirections = function(elements) {
        for (let element of elements) {
            if (!element.getAttribute('data-direction')) {
                element.setAttribute('data-direction', 'top');
                
            }
        }
    }
    setDataDirections(liInNav);



     
     
     
     
    


     
});
