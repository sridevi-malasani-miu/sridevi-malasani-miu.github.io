/*Factorial of a Number */
function factorial(n){
    if(n==1)
        return 1;
    return n*factorial(n-1);
}

// Function call execution context recursive call return
                       
// factorial(1)      n = 1                         1
// factorial(2)      n = 2          2*factorial(1) 2
// factorial(3)      n = 3          3*factorial(2) 6
// factorial(4)      n = 4          4*factorial(3) 24

function factorialWithoutRecursion(n){
    let product =1;
    while(n>0){
        product*= n;
        n--;
    }
    return product;
}


function findCount(s,letter){
    if(s===letter)
        return 1;
    else
        return 1+ findCount(s.substr(1));
}

function pow(x, n) {
    let result = 1;
    // multiply result by x n times in the loop
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
 }

/*Power of number using recursion*/
function pow(x, n) {
    if (n == 0) {
        return x;
    } else {
        return x * pow(x, n -1);
    }
}
// Function call execution context recursive call return

// pow(2,1)       x = 2, n=1      2
// pow(2,2)       x = 2, n =2     2 *pow(2,1)     4
// pow(2,3)       x =2 n= 3       2*pow(2,2)      8

/*Maximum Call stack size exceeded*/
function foo(){
   foo();
}

/*Find Length of string recursively*/
function findLengthRecursive(s){
    console.log(s);
    if(s==="")
        return 0;
    else{
        return 1 + findLengthRecursive(s.substr(1));
    }
}

// function min(array){
//     if(array.length==0)
//         return 233;
//     let lastMin = min(array.slice(1)) ;
//     return array[0]< lastMin ?array[0]: lastMin;
// }
// console.log(min([7,3,1,6,8,0,-1,67,89,90]));
// // min[5]            [5]                     8
// // min[4,5]         [4,5]       min[5]      6
// // min([3,4,5])     [3,4,5]     min[4,5]     1
// // min([2,3,4,5])   [2,3,4,5]   min[3,4,5]   2
// // min([1,2,3,4,5]) [1,2,3,4,5] min[2,3,4,5]  1

function occurence(string,letter){
    if(string.length==0)
        return 0;
    let count = string.charAt(0)===letter;
    return count + occurence(string.slice(1),letter) ;
}

function occurenceLoop(string,letter){
    let sum = 0;
    for(let i =0;i<string.length;i++){
        sum+= string.charAt(i)===letter?1:0;
    }
    console.log(sum)
}

// console.log(occurence("abcdcdedddc dfc","c"));
// //abcd C

// //occurence(d,c)  d, c                          0
// //occurence(cd,c)  cd, c, 1     occurence(d,c)  1
// //occurence(bcd,c)  bcd, c ,0    occurence(cd,c) 1
// //occurence(abcd,c)  abcd, c, 0     norence(bcd,c)

let company = { 
    sales: [{name: 'John', salary: 1000},
            {name: 'Alice', salary: 600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, 
                {name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{name: 'Jack', salary: 1300}],
         myDept:{subDep:[{name: 'subDep', salary: 500}] }
    }
}
function secondEmp(company){
    if(!company.sales)
        return {};
    company.sales[1].name, 
    company.sites[1].name,  company.sites[1].salary
}
function sumTotal(company){
    let totalSalary = 0;
    for(let key in company){
       console.log(key, company[key]);
       let obj = company[key]
       if(Array.isArray(obj)){
        totalSalary+=obj.reduce((sum,current)=> 
            sum+current.salary,0);
        console.log("first for loop", totalSalary)
       }
       else{
            totalSalary+=sumTotal(company[key]);
       }
    }
    return totalSalary;
}
//function call execution context           recursive call return

//sumTotal(company.development)  totalSarlay = 5100         5100
//sumTotal(company) company, totalSarlay = 1600+ sumTotal(company.development)  

function allEmployeeNames(company){
    let employees=[];
    if(!company)
        return employees;
   
    for(let key in company){
        if(Array.isArray(company[key])){
            employees= employees.concat(company[key].map(item=>item.name));
        }
        else{
            employees= employees.concat(allEmployeeNames(company[key]));
        }
    }
    return employees;
}
// // console.log("TOtal ",allEmployeeNames(company));
function linkedList(){
    let c = {value:"C"}
    let b ={value:"B",next:c}
    let a = {value: "A", next:b};
    console.log(a);
    a.next=a.next.next;
    console.log(a);
    delete b.next;
    a.next.next = b;
    c.next = {value:"Z"};
    c.next.next={value:"B"};
    console.log(JSON.stringify(a))
}

function fibonacci(n){
    if(n==0)
        return 0;
    if(n==1)
        return 1;
    let number = fibonacci(n-1)+fibonacci(n-2);
    //console.log(number);
   return number;
}

function sumWithLoop(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

function sumWithRecusion(n){
    if(n==0)
        return 0;
    return n+sumWithRecusion(n-1);
}
// let arr = [1,2,3,4,5,6,7];
function arraySumLoop(array){
    let sum =0;
    for(let i =0;i<array.length;i++){
        sum+=array[i]
    }
    return sum;
}

function arraySumRecursion(array){
    if(array.length==0)
        return 0;
  // return array.pop()+arraySumRecursion(array);
    console.log(" array",array)
    let current = array.shift();
    return current+arraySumRecursion(array);
}
//console.log("Array Sum with Recursion ",arraySumRecursion([1,2,3,4,5,6,7],0))
function findMin(array){
    let min = Infinity;
    for(let value of array){
        if(value<min)
            min=value;
    }
    return min;
}
// previousMin >currentValue ? currentValue:previousMin;
function findMinRecursion(array){
   if(array.length==1)
        return array[0];
    let current = array.shift();
    let previousMin = findMinRecursion(array);
   return current>previousMin ?current:previousMin;
}

//0 1 1 2 3 5 8 13 21 34
//fib(0)-> 0
//fib(1)-> 0 1
//fib(2)-> 0 1 1
//fib(3)-> 0 1 1 2
//fib(4)-> 0 1 1 2 3
function fibonacciLoop(n){
    let fibSeries = [];
    for(let i = 0;i<n;i++){
        if(i<=1)
            fibSeries.push(i);
        else{
            fibSeries.push(fibSeries[i-2]+fibSeries[i-1]);
        }
    }
    console.log(fibSeries);

}
//countOccurences("hello","l")
function countOccurences(string,letter){
    let count = 0;
    for(let i =0;i<string.length;i++){
        if(string.charAt(i)===letter)
            count++;
    }
    return count;
}

function run(){
    // console.log("Factorial recursion ",factorial(4));
    //  console.log(pow(2,3));
    //foo();
    // console.log(findLengthRecursive("Hello"));
    //console.log(findMinRecursion([3,1,67,0,-1,23,45]))
    console.log(fibonacci(6));
    //console.log( fibonacciLoop(6));
    //console.log(countOccurences("hello","l"));
   // console.log("TOtal ",sumTotal(company))
}
run()

function findsum(array) {
    if (array.length == 1) return  array[0] ;
    return array[0] + findsum(array.slice(1));
  }

  console.log(" dfdfd ",findsum([31,2,3,40]));
