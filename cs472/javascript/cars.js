let tataTiago = {
    name: "Tata Tiago", manufacturer: "Tata", fuelType: "petrol", bodyType: "hatchback",
    seatingCapacity: 5, price: 5000
}
let nexon = {
    name: "Tata Nexon", manufacturer: "Tata", fuelType: "diesel", bodyType: "SUV",
    seatingCapacity: 5, price: 7000
};
let mahindra = {
    name: "Mahindra XUV700", manufacturer: "Mahindra", fuelType: "petrol",
    bodyType: "SUV", seatingCapacity: 5, price: 7500
};
let mg = {
    name: "MG ZS EV", manufacturer: "Mahindra", fuelType: "Electric", bodyType: "SUV",
    seatingCapacity: 5, price: 25000
};
let volvo = {
    name: "Volvo XC90", manufacturer: "Volvo", fuelType: "petrol", bodyType: "hybrid",
    seatingCapacity: 7, price: 35000
};
let list = [tataTiago, nexon, mahindra, mg, volvo];

function getPetrolCarsWithinPrice(list, givenPrice) {
    let carArray = [];
    for (let car of list) {
        if (car.fuelType == 'petrol' && car.price < givenPrice)
            carArray.push(car);
    }
    return carArray;
}

// console.log(getPetrolCarsWithinPrice(list, 15000));

function groupByManufacturer(list) {
    let manufacturerArray = {};
    for (let car of list) {
        if (manufacturerArray[car.manufacturer])
            manufacturerArray[car.manufacturer]++;
        else
            manufacturerArray[car.manufacturer] = 1;
    }
    return manufacturerArray;

}
// console.log(groupByManufacturer(list));

function sortThemByGivenFilter(list, filter) {
    return list.sort(function (a, b) {
        if (filter == 'bodyType') {
            return a.bodyType.length > b.bodyType.length ? 1 : -1;
        }
        if (filter == 'price') {
            return a.price > b.price ? 1 : -1;
        }
    });
}

// console.log(sortThemByGivenFilter(list, "price"));

function addServiceCostToAllCars(list,cost) {
    let newList = [];
    for(let car of list){
        let cloned = cloneObject(car);
        cloned.serviceCost = cost;
        newList.push(cloned)
    }
    return newList;
}
function cloneObject(obj){
    let newObject = {}
    for(let key in obj){
        newObject[key]=obj[key];
    }
    return newObject;
}

console.log(addServiceCostToAllCars(list, 100));
