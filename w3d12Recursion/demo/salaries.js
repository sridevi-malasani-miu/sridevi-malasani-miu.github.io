let company = {
    sales: [{ name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }],
        myDept: { subDep: [{ name: 'subDep', salary: 500 }] }
    }
}
//,
function secondEmp(company) {
    if (!company.sales)
        return {};
    company.sales[1].name,
        company.sites[1].name, company.sites[1].salary
}
function sumTotalWithoutRecursion(company) {
    let totalSalary = 0;
    for (let key in company) {
        console.log(key, company[key]);
        let obj = company[key]
        if (Array.isArray(obj))
            totalSalary += obj.reduce((sum, current) => sum + current.salary, 0);
        else
            for (let key2 in obj) {
                console.log(` key2 ${key2} `);
                let obj2 = obj[key2];
                if (Array.isArray(obj2))
                    totalSalary += obj2.reduce((sum, current) => sum + current.salary, 0);
                else
                    for (let key3 in obj2) {
                        console.log(` key2 ${key2} `);
                        if (Array.isArray(obj2[key3]))
                            totalSalary += obj2[key3].reduce((sum, current) => sum + current.salary, 0);
                    }
            }
    }
    return totalSalary;
}

function sumTotal(company) {
    let totalSalary = 0;
    for (let key in company) {
        console.log(key, company[key]);
        let obj = company[key]
        if (Array.isArray(obj)) {
            totalSalary += obj.reduce((sum, current) =>
                sum + current.salary, 0);
            console.log("first for loop", totalSalary)
        }
        else {
            totalSalary += sumTotal(company[key]);
        }
    }
    return totalSalary;
}


//function call execution context           recursive call return

//sumTotal(company.development)  totalSarlay = 5100         5100
//sumTotal(company) company, totalSarlay = 1600+ sumTotal(company.development)  

function allEmployeeNames(company) {
    let employees = [];
    if (!company)
        return employees;

    for (let key in company) {
        if (Array.isArray(company[key])) {
            employees = employees.concat(company[key].map(item => item.name));
        }
        else {
            employees = employees.concat(allEmployeeNames(company[key]));
        }
    }
    return employees;
}
