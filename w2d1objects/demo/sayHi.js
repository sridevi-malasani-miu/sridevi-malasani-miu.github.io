"use strict";

const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const Intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };

 
  
  /**
   * @returns {undefined} 
   */
  // Hello, my name is John. I am 27.  My job is Software Engineer.'
  function sayHi() {
      console.log(this)
     return "Hello, my name is "+this.name+ ". I am "+this.age+". My Job is"+this.job
  }

  function sayHi(obj) {
    console.log(this)
   return "Hello, my name is "+obj.name+ ". I am "+obj.age+". My Job is"+obj.job
}

function sayHi(name,age,job) {
    console.log(this)
   return "Hello, my name is "+name+ ". I am "+age+". My Job is"+job
}
  
  // add sayHi function to both objects
//   Manager.sayHi = sayHi;
//   Intern.sayHi = sayHi;
  
  //sayHi();
//   console.log(Manager.sayHi()); 
//   console.log(Intern.sayHi()); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

//sayHi(Manager.name,Manager.age,Manager.position);
let user1 = {
    sayHi(fn) { // same as "sayHi: function()"
        return function (){console.log("Hello")};
    }
    }

    sayHi(function(){console.log("hello")});
    console.log(user1)

    function User(name) {
        this.name = name;
        this.isAdmin = false;
    }
    let user = new User("Jack");

    let user2 = new User("Chin");
   // console.log(user)
   let user1 = {name:"Jack",isAdmin:false}
   let user2 = {name:"Jack",isAdmin:false}
   // console.log(user)