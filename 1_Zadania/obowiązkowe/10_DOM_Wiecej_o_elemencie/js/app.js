document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    // Zadanie 0

    const listEls = document.querySelectorAll('.ex5 li');
    listEls.forEach((el, index) => {
        if (index % 2 === 0) {
            el.style.backgroundColor = 'green';
        };
        if (index === 4) {
            el.classList.add('big');
        }
        if (index % 3 === 0) {
            el.firstElementChild.style.textDecoration = 'underline';
        }
        if (index % 3 !== 0) {
            el.firstElementChild.style.textDecoration = 'none';
        }
    });
    
    // Zadanie 1

    const ex1_container = document.querySelector('.ex1.exercise');
    const chrome = ex1_container.getElementsByClassName('chrome')[0];
    const firefox = ex1_container.getElementsByClassName('firefox')[0];
    const edge = ex1_container.getElementsByClassName('edge')[0];

    const firefoxLink = ex1_container.querySelector(".firefox~a");
    const edgeLink = ex1_container.querySelector('.edge~a');
    
    chrome.style.width = "100px";

    edge.style.backgroundImage = "url(assets/img/edge.png)";
    edgelink = 'https://www.microsoft.com/pl-pl/windows/microsoft-edge';

    firefox.style.backgroundImage = "url(assets/img/firefox.png)";
    firefoxLink.href = "https://www.mozilla.org/pl/firefox/new/";
    firefoxLink.innerText = "Firefox";

    // ponieważ modyfikujemy styl konkretnego elementu DOM

    // Zadanie 2

    const imie = document.getElementById('name');
    const kolor = document.getElementById("fav_color");
    const potrawa = document.getElementById("fav_meal");

    imie.innerHTML += "Grzegorz Andrzejowski";
    kolor.innerHTML += "Czarny";
    potrawa.innerHTML += "Sushi";

    // Zadanie 3

    const ex3_container = document.querySelector('.ex3');

    const ex3_list = ex3_container.getElementsByTagName("ul")[0];
    ex3_list.classList.add('menu');

    ex3_list.querySelectorAll("li").forEach(element => {
        element.classList.add('menuElement');
        element.classList.remove('error');
    });

    // Zadanie 4

    const ex4_container = document.querySelector('.ex4');
    ex4_container.querySelectorAll('li').forEach((element, index) => {
        element.dataset.id = index + 1;
    });


    

});