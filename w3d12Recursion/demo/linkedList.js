function linkedList() {
    let list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };
    list.next.next.next.next = { value: 5 };

    //Split list 1,2 and newList 3,4
    let newList = list.next.next;
    list.next.next = null;
    console.log(list, newList);
    //Join newList again to list.
    list.next.next = newList;

    console.log(list);
    console.log(JSON.stringify(list));
    //Prepend New item to the list
    list = { value: "new item", next: list }
    console.log(list);
}

function linkedListAssignment() {
    let c = { value: "C" }
    let b = { value: "B", next: c }
    let a = { value: "A", next: b };
    console.log(a);
    //delete link to B
    a.next = a.next.next;
    console.log(a);
    //delete b.next;
    b.next = null;
    //Add B at the end after C
    a.next.next = b;
    //Add Z between c and b
    c.next = { value: "Z" };
    c.next.next = b;
    console.log(JSON.stringify(a));
}
