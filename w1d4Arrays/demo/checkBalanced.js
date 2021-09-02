function checkBalancep(expr){
    var elementStack=[];
    for(let element of expr){
        if(element=='('||element=='{'||element=='[')
            elementStack.push(element);
        else {
            var openBracket =elementStack.pop();
            if(isMatch(openBracket,element))
                continue;
            else{
                return "Not Balanced"
            }
        }
    }
    return "Balanced"
}

function isMatch(open,close){
    if(open=='(' && close==")")
        return true;
    if(open=='[' && close=="]")
        return true;
    if(open=='{' && close=="}")
        return true;
}

var expr = ["(", ")", "[", "{", "}", "]"] ;
var expr2= ["[", "(", "]", ")"]
var expr3= ["[", "(", ")", "]"];

console.log(checkBalancep(expr2));
console.log(checkBalancep(expr));
console.log(checkBalancep(expr3));

// FOr expr
// 1st iteration 
// ["("]
// 2nd iteration
// "(" , ")" []
// 3rd iteration
// "["
// 4thd iteration
// "{" ["[","{"]
// 5th iteration
// "{","}" ["["]