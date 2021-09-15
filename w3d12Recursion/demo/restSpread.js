
function findMaxArguments() {
    let max = -Infinity;
    console.log(arguments)
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

function restTest(x, y, ...more) {
    //"more" is array of all extra passed params
    let total = x + y;
    console.log(total, x, y, more.length);
    if (more.length > 0) {
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
    }
    console.log("Total: " + total);
    return total;
}

function spreadTest() {
    let a = [1, 2, 3];
    // let b = a;
    a.push([5, 6]);

    a = a.concat([5, 6])
    console.log(a);

    let b = [...a];//copy of array- clone
    b.splice(0, 1);
    a.splice(0, 0, "add");
    console.log(a, b);
    console.log(a == b);

    let str = "Hello";
    console.log(" spread ", [...str]);

    let spread1 = [1, 2, 3];
    let string = "dog";
    let numberN = 2;
    let booleanB = true;
    let spread2 = [4, 5];
    console.log([...spread1, ...spread2, string, numberN]);
    console.log(spread1.concat(spread2, string, numberN));

    abb = { a: 1, b: 2, c: 3, d: 44 }
    baa = { ...abb }//copy of object - clone
    console.log(baa) // {a:1, b:2, c:3, d: 44}
    baa.a = 100;
    console.log(abb) // {a:1, b:2, c:3, d: 44} 
}

    // console.log("  max element ",findMaxArguments(1, 123, 500, 115, 66, 88));
    console.log("  max element ", findMaxArguments([1,"string",true,4,5],[1,2]));
//restTest(5, 5, 5);
// restTest(6, 6, 6, 6, 6);
// restTest(6, 6, [6],[6], "6");
// restTest(3) //-> x, y, more, arguments-[3]
