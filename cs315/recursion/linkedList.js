let el4 =
{
    value: 4,
    next: null
};
let el3 =
{
    value: 3,
    next: el4
};
let el2 =
{
    value: 2,
    next: el3
};
let list =
{
    value: 1,
    next: el2
};
//Print All Nodes
function printValues(list) {
    if (list != null) {
        console.log(list.value);
        printValues(list.next)
    }
}
