document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     // Zadanie 0
     const title = document.querySelector('.title');
     const getDataAnimation = element => {
         const anim = element.dataset.animation;
         return anim;
     }
     getDataAnimation(title);

     // Zadanie 1

     let home1 = document.getElementById('home');
     let home2 = document.querySelector('#home');
     let li = document.querySelector('li[data-direction]');
     let block = document.querySelector('.block');


     // Zadanie 2

     let navlis = document.querySelectorAll('nav li');
     let divparams = document.querySelectorAll('div p');
     let articledivs = document.querySelectorAll('article div');

     // Zadanie 3

     let firstArticle = document.querySelector('article.first');
     let howMany = firstArticle.querySelectorAll('h1').length;
     console.log(howMany);
     

    

});
