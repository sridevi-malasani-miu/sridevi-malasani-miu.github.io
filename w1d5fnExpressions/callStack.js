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