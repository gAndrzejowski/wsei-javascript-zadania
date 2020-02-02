// Zadanie 0

const car = {
    brand: "Czarny",
    color: "Mercedes",
    numberOfKilometers: 0,
    printCarinfo() {
        return `${this.color} ${this.brand}, ${this.numberOfKilometers}km`;
    },
    drive(km) {
        this.numberOfKilometers += km;
    }
};

console.log(car.printCarinfo());
car.drive(20);
console.log(car.printCarinfo());

// Zadanie 1

car.przeglady = [];
car.dodajPrzeglad = function(dataPrzegladu) {
    this.przeglady.push(dataPrzegladu);
};
car.wypiszPrzeglady = function() {
    return this.przeglady;
};
car.dodajPrzeglad("2019-02-01");
car.dodajPrzeglad("2020-02-01");
console.log(car.wypiszPrzeglady());

// Zadanie 2 - W pliku zadanie02.js

// Zadanie 3

const stairs = {
    step: 0,
    up() {
        this.step += 1;
    },
    down() {
        this.step -= 1;
    },
    printStep() {
        console.log(this.step);
    }
};

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
