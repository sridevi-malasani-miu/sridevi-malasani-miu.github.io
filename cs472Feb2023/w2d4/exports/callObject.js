var exportDemo = require('./exportsObject');
console.log(exportDemo);


function changeObj(){
    exportDemo.change(20);
    exportDemo.print();
    console.log(" Inside caller ",exportDemo.myObj);

    exportDemo.myObj.a = 30;
    exportDemo.print();
    console.log(" Inside caller ",exportDemo.myObj);
}
changeObj();
