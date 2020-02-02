powiedzCzesc();
function powiedzCzesc() {
    console.log("Cześć");
}
powiedzCzesc();

// W obu wypadkach funkcja wywołała się poprawnie
// Tak zdefiniowane funkcje można wywoływać wyżej niż są definiowane

powiedzWitaj();
var powiedzWitaj = function() {
    console.log("Witaj");
}
powiedzWitaj();

// Wystąpił błąd - funkcje definiowane jako wyrażenia funkcyjne
// Nie mogą być wywoływane wyżej niż ich definicja