
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Zadanie 0

const checkArray = (dwuwymiarowa) => dwuwymiarowa.map(
    podtablica => podtablica.every (
        element => element % 2 === 0
    )
);

console.log(checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]));

// Zadanie 1

console.log(task1Array[2][1]);
console.log(task1Array[1].length);
console.log(task1Array[3][1])

// Zadanie 2

for (let counter = 0; counter < task2Array.length; counter++) {
    console.log(task2Array[counter]);
}

for (let counter = 0; counter < task2Array.length; counter++) {
    console.log(task2Array[counter].length);
}

for (let counter1 = 0; counter1 < task2Array.length; counter1++) {
    for (let counter2 = 0; counter2 < task2Array[counter1].length; counter2++) {
        console.log(task2Array[counter1][counter2]);
    }
}

// Zadanie 3

const print2DArray = (tablica2D) => {
    const splaszczone = tablica2D.reduce((acc, rzad) => {
        acc.concat(rzad);
    });
    splaszczone.forEach(element => console.log(element));
};