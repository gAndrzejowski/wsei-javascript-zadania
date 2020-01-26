// Zadanie 0

const distFromAvarage = (tablica) => {
    const suma = tablica.reduce((razem, nastepny) => razem + nastepny);
    const srednia = suma/tablica.length;
    return tablica.map(liczba => liczba - srednia);
}

console.log(distFromAvarage([1,2,3,4,5,6,7]));


// Zadanie 1

const ulubione = ["jabłko", "banan", "gruszka", "śliwka"];
console.log(ulubione[ulubione.length-1]);
for (let owoc of ulubione) {
    console.log(owoc);
}

// Zadanie 2

function createArray(number) {
    var newArray = [];

    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray[2];
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// Zadanie 3

const printTable = (tablica) => {
    for (let counter = 0; counter < tablica.length; counter ++) {
        console.log(tablica[counter]);
    }
}

printTable([1,2,3,4,5,9]);

// Zadanie 4

const multiply = (tablica) => {
    let iloczyn = 1;
    for (let counter = 0; counter < tablica.length; counter++) {
        iloczyn *= tablica[counter];
    }
    return iloczyn;
}

console.log(multiply([1,2,3,4,5,6,7]));

// Zadanie 5

const getEvenAvarage = (tablica) => {
    const parzyste = tablica.filter(liczba => liczba%2 === 0);
    const suma = parzyste.reduce((razem, nastepny) => razem + nastepny);
    return suma/parzyste.length;
}

console.log(getEvenAvarage([1,2,3,4,5,6,7]));

// Zadanie 6

const sortArray = (tablica) => tablica.sort((a,b) => a-b);

console.log(sortArray([145,11,3,64,4,6,10]));

// Zadanie 7

const addArrays = (tablica1, tablica2) => {
    const zsumowane = [];
    const [dluzsza, krotsza] = tablica1.length > tablica2.length ? 
    [tablica1, tablica2] : 
    [tablica2, tablica1];
    
    dluzsza.forEach((liczba, indeks) => {
        const zKrotszej = krotsza[indeks] || 0;
        zsumowane.push(liczba + zKrotszej); 
    });
    return zsumowane;
}

console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));