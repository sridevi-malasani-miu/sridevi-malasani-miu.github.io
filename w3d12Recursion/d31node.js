function printNames(node1){
    consol.log(node1.name+":"+node1.value);
    if(node1.children && node1.children.length>0){
        node1.children.forEach(function(child){
            printNames(child);
        })
    }
}
//printNames(node1);
