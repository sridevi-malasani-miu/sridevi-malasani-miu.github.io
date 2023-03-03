// Create /Delete Object
let obj = {a:1};
//Empty Object
let obj = {};
//Delete
obj = null;
// 2. Update Properties of Object
obj.a = 2;
//Find value of given property
let key = "a";
obj[key]= 2;
obj["a"] = 2;
// 3. Remove Properties from the object
delete obj.a;
obj.a = null//a is assigned to null;

function loopingObject(obj){
    for(let key in obj){
        console.log(" key value",key, obj[key])
    }
}
loopingObject({a:1,b:2})


// 4. Copy/Clone Object
let obj1 = obj;
let newObject = {a:1, b:"string",c:[1,2], d:{a:1,b:2}}
//Clone object
//for(let key in obj){
    key ->key
    value->obj[key]
//}
// Find if this particular "value" exists in the object -> "sdfsdf"
let newObject = {a:1, b:"string",c:[1,2] }


//Compare arrays and objects

