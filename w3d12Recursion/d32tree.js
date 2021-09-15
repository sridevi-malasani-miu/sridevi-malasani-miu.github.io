function contains(tree,name){
    let match = false;
    if(tree.value===name)
        return true;
    if(Array.isArray(tree)){
        tree.forEach(function(item){
            if(item.value===name){
                match= true;
            }else if(!match && item.descendents.length>0)
            {
                match = containsRecursion(item.descendents,name);
            } 
        });

    }else if(tree.descendents.length>0){
        match= containsRecursion(tree.descendents,name);
    }
    return match;
}
