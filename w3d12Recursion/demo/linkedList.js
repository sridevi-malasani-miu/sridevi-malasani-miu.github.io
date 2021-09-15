function linkedList() {
    let list = { value: 1 };
    list.next = { value: 2 };
    list.next.next = { value: 3 };
    list.next.next.next = { value: 4 };
    list.next.next.next.next = { value: 5 };

    let newList = list.next.next;
    list.next.next = null;
    console.log(list, newList);
    list.next.next = newList;

    console.log(list);
    console.log(JSON.stringify(list));
    list = { value: "new item", next: list }
    console.log(list);
}

function linkedListAssignment() {
    let c = { value: "C" }
    let b = { value: "B", next: c }
    let a = { value: "A", next: b };
    console.log(a);
    a.next = a.next.next;
    console.log(a);
    //delete b.next;
    b.next = null;
    a.next.next = b;
    c.next = { value: "Z" };
    c.next.next = b;
    console.log(JSON.stringify(a));
}
