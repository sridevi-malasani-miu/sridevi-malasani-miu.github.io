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
// console.log( sumSalariesByDept(company));

// Get the avg salaries by department
function avgSalariesByDept(company){
    // console.log(company)
   let deptSalary = {};
    for(let deptName in company){
        let dept = company[deptName];
        let sum = 0;
        if(Array.isArray(dept)){
            sum+=dept.reduce(function(prev,emp){
                return prev+emp.salary;
            },0);
            deptSalary[deptName]=sum/dept.length;
        }else{
            // console.log(deptSalary);
            deptSalary = Object.assign(avgSalariesByDept(dept),deptSalary);
        }
    }
    return deptSalary;
}
// console.log( avgSalariesByDept(company));

// Get the max salaries by each department
function maxSalariesByDept(company){
   let deptSalary = {};
    for(let deptName in company){
        let dept = company[deptName];
        
        if(Array.isArray(dept)){
            let max =dept.reduce(function(prev,emp){
                return prev>emp.salary?prev:emp.salary;
            },dept[0].salary);
            deptSalary[deptName]=max;
        }else{
            // console.log(deptSalary);
            deptSalary = Object.assign(maxSalariesByDept(dept),deptSalary);
        }
    }
    return deptSalary;
}
// console.log( maxSalariesByDept(company));

// Get the max salaries in Company
function getHighestSalary(company){
    let maxSalary =0;
     for(let deptName in company){
         let dept = company[deptName];
         if(Array.isArray(dept)){
             let deptMax =dept.reduce(function(prev,emp){
                 return prev>emp.salary?prev:emp.salary;
             },dept[0].salary);
             maxSalary = maxSalary>deptMax?maxSalary:deptMax;
         }else{
             let temp = getHighestSalary(dept);
             maxSalary = maxSalary>temp?maxSalary:temp;
         }
     }
     return maxSalary;
 }
 console.log(getHighestSalary(company));
