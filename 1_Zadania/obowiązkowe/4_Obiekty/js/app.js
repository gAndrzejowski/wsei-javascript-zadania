// Zadanie 0a

const city = {
    capital: "Kraków",
    population: 1000000,
    president: "Jacek Majchrowski",
    primeMinisters: ["Adam Nowak", "Józef Kowalski"]
};

console.log(
    city.capital,
    city.population, 
    city.president, 
    city.primeMinisters
    );

// Zadanie 0b

const timeMachine = {
    shape: "Kwadratowa",
    model: "T1M3",
    run(date, place) {
        console.log(`Przenosimy się do: ${place}, do roku ${date.getFullYear()}`);
    }
};
console.log(timeMachine.shape, timeMachine.model, timeMachine.run);
timeMachine.run(new Date(100000000000), "Suwałki");


// Zadanie 1

const book = {
    title: "Mort",
    author: "Terry Pratchett",
    numberOFPages: 262
};

console.log(book.title, book.author, book.numberOFPages);

// Zadanie 2

const person = {
    name: "Adam",
    age: 27,
    sayHello() { console.log("hello")}
};

console.log(person.name, person.age, person.sayHello);
person.sayHello();

// Zadanie 3

const przepis = {
    title: 'Kanapka z serem',
    servings: 1
};

przepis.ingredients = ["Kromka chleba", "Masło", "Ser"];

console.log(przepis.title, przepis.servings, przepis.ingredients);

// Zadanie 4

var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (let field in movie) {
    console.log(`${field}: ${movie[field]}`);
};

// Zadanie 5

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for (let animalIndex = 0; animalIndex<animals.length; animalIndex++) {
    const animal = animals[animalIndex];
    for (let animalData in animal) {
        if (animalData === "health") {
            console.log("Visits: ");
            for (let visitIndex in animal[animalData]) {
                console.log(`Visit ${1 + Number(visitIndex)}`);
                const visit = animal[animalData][visitIndex];
                for (let visitData in  visit) {
                    console.log(`${visitData}: ${visit[visitData]}`);
                }
            }
        }
        else {
            console.log(`${animalData}: ${animal[animalData]}`);
        }
    }
}

// Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);