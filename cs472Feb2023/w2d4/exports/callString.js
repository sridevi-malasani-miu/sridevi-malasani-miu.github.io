var exportDemo = require('./exportsString');
console.log(exportDemo);


function changeObj(){
    exportDemo.change(20);
    exportDemo.print();
    console.log(" Inside caller ",exportDemo.myString);

    exportsDemo.myString = 30;
    exportDemo.print();
    console.log(" Inside caller ",exportDemo.myString);
}
changeObj();
