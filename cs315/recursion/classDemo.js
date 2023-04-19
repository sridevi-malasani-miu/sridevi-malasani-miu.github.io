// function myFn(){
//     console.log(" myFn ");
//     let result = multiply();
//     console.log(" after call ");
//     return 2*result;
// }

// function multiply(){
//     console.log('multiply')
//     return 4;
// }
// myFn();
// myFn
// multiply

let array = [1, 2, 3, 4];

function sum(array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    return sum;
}
// sum(array);
// sum[n] =n+sum[n-1];

function recursiveSum(array) {
    if (array.length == 0)
        return 0;
    let firstElement = array[0];
    let subArray = array.slice(1);
    return firstElement + recursiveSum(subArray);
}
// console.log(recursiveSum(array));


// function count(string,letter){
//     if(string.length==0)
//         return 0;
//     let countL = string.charAt(0)==letter?1:0;
//     return countL+count(string.substring(1),letter)
// }
// console.log(count('apple','d'));

function countOccurance(string, char) {
    console.log(string, char);
    if (string.length === 0) {
        return 0;
    } else if (string.charAt(0) === char) {
        return 1 + countOccurance(string.substring(1), char);
    } else {
        return 0 + countOccurance(string.substring(1), char);
    }
}
console.log(countOccurance('apple', 'p'));

let company = {

    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: { sitessubdep1: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }], sitessubdep2: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }] },
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSal(company) {
    console.log(company)
    let sum = 0;
    for (let deptName in company) {
        let dept = company[deptName];
        if (Array.isArray(dept)) {
            sum += dept.reduce((prev, emp) => {
                return prev + emp.salary
            }, 0);
        } else {
            for (let subdeptName in dept) {
                let subdept = company[subdeptName];
                if (Array.isArray(subdept)) {
                    sum += dept.reduce((prev, emp) => {
                        return prev + emp.salary
                    }, 0);
                }
                else{

                }
            }
        }
        return sum;
    }

    function sumSal(company) {
        console.log(company)
        let sum = 0;
        for (let deptName in company) {
            let dept = company[deptName];
            if (Array.isArray(dept)) {
                sum += dept.reduce((prev, emp) => {
                    return prev + emp.salary
                }, 0);
            } else {
                
            }
            return sum;
        }

    // get the sum of salaries of all employees whose name is 'John'.
    // Get all the employee names;
    //



    function sumSalaries(company) {
        console.log(company)
        let sum = 0;
        for (let deptName in company) {
            let dept = company[deptName];
            if (Array.isArray(dept)) {
                sum += dept.reduce((prev, emp) => {
                    return prev + emp.salary
                }, 0);
            } else {
                sum += sumSalaries(dept);
            }
        }
        return sum;
    }
    // console.log(sumSalaries(company));

    console.log(company.sales[1]);



