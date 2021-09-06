function b () {
    console.log("function b is running")
    console.log("function b is finished")
  }
  
  function a () {
    console.log("function a is running")
    b()
    console.log("function a finished")
  }
  
  console.log("hello from global")
  a();


  // function foo(){
  //  // for(let i =0)
  //   foo();
  // }


  // foo();

  function funX(a, b) {
    console.log("funx",a,b)
    let c;
    c = 5;
    funY(a * c, "yes");
  }

    function funY(x, y) {
      console.log("funy",x,y)
      let z;
      z = "I can see the sea";
      console.log("What is on the stack here?");
    }
    function main() {
      let a;
      let b;
      a = "Hello";
      funX(3, a);
      b = "World";
      console.log("finally",a,b)
    }
    main();
    