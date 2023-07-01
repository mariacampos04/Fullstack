
//Creating car class with make, model, and year with dscription method
class Car{
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
    getDescription(){
        return `The car's make is ${this.make}, the model is ${this.model}, and the year is ${this.year} `
    }
}

//creating Electric class that extends Car class with an additional parameter 
class ElectricCar extends Car{
    constructor(make, model, year, range){
    super(make, model, year);
    this.range = range;
    }
    getDescription(){
        return `${super.getDescription()}, the mileage is ${this.range}`
}
}

// Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, 
// and range 300, and the getDescription method is called on the instance. The output will be a string containing 
// the make, model, year, and range of the electric car.

const car = new ElectricCar('Tesla', 'Model S', 2019, 300);
console.log(car.getDescription());





