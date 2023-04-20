let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: {
            agriculture: [{ name: 'John', salary: 1000 },
            { name: 'Wengel', salary: 2000 }],
            infoTech: [{ name: 'Rajeev', salary: 9000 }, 
            { name: 'Samuel', salary: 3000 }]
        },
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
// Get the sum of salaries by department
function sumSalariesByDept(company){
    // console.log(company)
   let deptSalary = {};
    for(let deptName in company){
        let dept = company[deptName];
        let sum = 0;
        if(Array.isArray(dept)){
            sum+=dept.reduce(function(prev,emp){
                return prev+emp.salary;
            },0);
            deptSalary[deptName]=sum;
        }else{
            // console.log(deptSalary);
            deptSalary = Object.assign(sumSalariesByDept(dept),deptSalary);
        }
    }
    return deptSalary;
}
console.log( sumSalariesByDept(company));
