
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Funkcja sortuje malejąco zdefiniowaną wewnątrz tablicę liczb
function sortArray() {

    // Tablica do posortowania - dostępna tylko wewnątrz funkcji
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Metoda sortująca - zwraca posortowaną tablicę
    // Jeśli nie podamy funkcji tablica zostanie posortowana alfabetycznie
    // [1, 114, 3, 41, 54, 6, 64]
    points.sort(function (a, b) {
        // sortowanie malejące liczb
        // <0 => element a przed elementem b
        // >0 => element b przed elementem a
        // === 0 => elementy są równe 
        return a - b;
    });

    // Zwracamy posortowaną tablicę
    return points;
}

// [1,3,6,41,54,64,114]
sortArray();
