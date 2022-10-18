let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        new1:[{name:'Jean',salary:1000000}],
        innner:{
            inner2:{
            sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
            internals: [{ name: 'Jack', salary: 1300 }],
            computer: [{ name: 'Duyen', salary: 9300 }]
        }
    }
    }
}

function findSumofSalary(company) {
    let totalSales = 0;
    for (let dep in company) {
        let eachDep = company[dep];
        if (Array.isArray(eachDep)) {
            // console.log(" here ",eachDep);
            for (let person of eachDep) {
                totalSales += person.salary;
            }
        } else {
            for (let subDepName in eachDep) {
                let subDep = eachDep[subDepName];
                console.log(subDep)
                for (let person of subDep) {
                    totalSales += person.salary;
                }
            }
        }
    }
    return totalSales;
}
function sumSalaries(department) {
    if (Array.isArray(department)) { // case (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
    } else { // case (2)
        let sum = 0;
        for (let subdepName in department) {
            let subDep = department[subdepName];
            sum += sumSalaries(subDep); // recursively call for subdepartments, sum the results
        }
        return sum;
    }
}
console.log(sumSalaries(company)); // 6700


// let obj = {a:1,b:2}
// for(let prop in obj){
//     console.log(prop,obj[prop])
// }
// console.log(company.sales[0].salary);//Johns
// console.log(company.development.sites[0].salary);//Peter

// function findSumofSalary(company) {
//     let totalSales = 0;
//     for (const person of company.sales) {
//         totalSales = totalSales + person.salary
//     }
//     for (const person of company.development.sites) {
//         totalSales = totalSales + person.salary
//     }

//     for (const person of company.development.internals) {
//         totalSales = totalSales + person.salary
//     }
//     return totalSales;
// }

// console.log(findSumofSalary(company))
let myArray = [1,2] , myArray2 = [3,4]
console.log(myArray.concat(myArray2));
