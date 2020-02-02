/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Funkcja zewnętrzna
function jeden() {

    // Zmienna dostępna w całej funkcji jeden
    var zmienna1 = 1;

    // Funkcja wewnętrzna
    function dwa() {

        // 1 - Dostępne poniewaz dwa() jest wewnątrz jeden()
        console.log(zmienna1);

        // Zmienna dostępna tylko wewnątrz dwa() 
        var zmienna2 = 3;
    }

    // console.log(1)
    dwa();

    // undefined - z zewnątrz funkcji dwa() nie ma dostępu do zmienna2
    console.log(zmienna2)
}

// Console.log(1) - wywołane z wewnątrz funckji jeden ma dostęp do zmienna1
// Natomiast gdybyśmy spróbowali "console.log(zmienna1)" to dostaniemy undefined
jeden()