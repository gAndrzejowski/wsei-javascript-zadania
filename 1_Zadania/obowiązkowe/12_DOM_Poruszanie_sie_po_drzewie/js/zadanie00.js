document.addEventListener('DOMContentLoaded', () => {
    const firstEl = document.querySelector('.first');
    const firstChildOfFirstEl = firstEl.firstElementChild;
    const thirdChildOfFirstEl = firstChildOfFirstEl.children[2];

    const secondEl = document.getElementById('second');
    const parentOfSecond = secondEl.parentElement;
    const fourthChildOfParentOfSecond = parentOfSecond.children[3];

    const dataEx = document.querySelector('[data-ex=third]');
    const grandparentOfdataEx = dataEx.parentElement.parentElement;
    const lastChildOfDataExGrandpa = grandparentOfdataEx.lastElementChild;
    const firstChildOfDataExParent = lastChildOfDataExGrandpa.firstElementChild;
    const middleChildOfDataExSibling = firstChildOfDataExParent.children[
        Math.floor(firstChildOfDataExParent.childElementCount / 2 )
    ];

    const forthEl = document.querySelector('.forth');
    const parentOfForth = forthEl.parentElement;
    const firstArticleChild = parentOfForth.querySelector("article:first-of-type");
    const secondParagraphChild = firstArticleChild.querySelector('p:nth-of-type(2)');

})
