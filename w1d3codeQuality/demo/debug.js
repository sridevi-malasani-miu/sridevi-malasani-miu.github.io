    // Step Over - line by line
    // Step into - Step into that function
    //Step out - Step out of the function
    let y = 6;
    function f ( x) {
        y = y +x;
        console.log ("num is " + (x+0)); // <- STEP INTO
    }

    function  g ( x) {
      y = y +2;
      f(x); //
      f(1); // <----------------------------------- STEP OVER
    }

    function main () {
        y = y +1;
        g(2);
        g(3); // <----------------------------------- STEP OUT OF
    }

    main();

    // Can also have multiple variables and 
