// Zadanie 0

function Basket() {
    this.products = [];
    this.sum = 0;
}
Basket.prototype.addProduct = function(name, price) {
    this.products.push({name, price});
    this.sum += price;
};
Basket.prototype.showBasket = function() {
    console.log("Produkty:");
    for (let product of this.products) {
        console.log(`${product.name}: ${product.price}`);
    }
    console.log("--------");
    console.log(`Razem do zapłaty: ${this.sum}`);
};

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();

// Zadanie 1

var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};

const Robo1 = new Robot("Jacek");
const Robo2 = new Robot("Marcin");
Robo1.isFunctional = false;
Robo1.sayHi("Me");
Robo2.sayHi("Me");
Robo1.changeName("Placek");
Robo2.fixIt();
Robo1.sayHi("You");
Robo2.sayHi("You");

// Zadanie 2

function Calculator() {
    this.history = [];
};
Calculator.prototype.add = function(num1, num2) {
    const result = num1 + num2;
    this.history.push(`added ${num1} to ${num2} got ${result}`);
    return result;
};
Calculator.prototype.multiply = function(num1, num2) {
    const result = num1 * num2;
    this.history.push(`multiplied ${num1} by ${num2} got ${result}`);
    return result;
};
Calculator.prototype.subtract = function(num1, num2) {
    const result = num2 - num1;
    this.history.push(`subtracted ${num1} from ${num2} got ${result}`);
    return result;
};
Calculator.prototype.divide = function(num1, num2) {
    const result = num1 / num2;
    this.history.push(`divided ${num1} by ${num2} got ${result}`);
    return result;
};
Calculator.prototype.printOperations = function() {
    if (this.history.length === 0) {
        console.log("*** NO OPERATIONS ***");
    }
    else  {
        for (let operation of this.history) {
            console.log(operation)
        }
    }
};
Calculator.prototype.clearOperations = function() {
    this.history = [];
}

const calc = new Calculator();
console.log(calc.add(2,3));
console.log(calc.subtract(2,3));
console.log(calc.multiply(2,3));
console.log(calc.divide(2,3));
calc.printOperations();
calc.clearOperations();
calc.printOperations();