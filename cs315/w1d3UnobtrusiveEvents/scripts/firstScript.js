window.onload = submitWithOnload;
// document.getElementById("btn").onclick = function(){
//     alert("clicked")
// };
var array = [];
let itemName = document.getElementById("itemName");
let obj = {itemName:itemName.value, }
function submitWithOnload (){
    alert(" here ")
    document.getElementById("btn").onclick = function(){
        alert("clicked");
        console.log(document.getElementById("myINput").value);
        document.getElementById("myINput").setAttribute("class","fancy");
        let element = document.getElementById("myINput").value;
        element = "";
        //  let a = {x:10}; let b = {x:20};
        //  let v = a.x
        //  v = 30;

    }
}

function submit(){
    // console.log(" inside submit")
    // document.getElementById("btn").onclick = function(){
    //     alert("clicked");
    // }
    // document.getElementById("btn").onclick = function(){
    //     alert("second handler for button");
    // }
    document.getElementById("btn").addEventListener("click", function(){
        alert(" here first handler")
    });
    document.getElementById("btn").addEventListener("click", function(){
        alert(" here second handler")
    });
}

function secondHandler(){
    alert(" After load")
}
//mouse click ->event
//listener - onclick//
//function->handler

