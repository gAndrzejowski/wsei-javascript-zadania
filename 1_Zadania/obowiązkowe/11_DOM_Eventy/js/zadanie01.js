document.addEventListener('DOMContentLoaded', () => {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// Po przeniesieniu tagu do sekcji head występuje błąd przy
// próbie skorzystania z DOM, ponieważ drzewo DOM jeszcze nie
// zostało załadowane. Umieszczenie kodu w event listenerze
// poprawia sytuację ponieważ teraz kod jest wykonywany dopiero
// po załadowaniu drzewa DOM. Z kolei przeniesienie tagu na
// koniec pliku powoduje, że kod wcale nie jest wykonywany
// ponieważ czeka na zdarzenie "DOMContentLoaded" które już
// nastąpiło