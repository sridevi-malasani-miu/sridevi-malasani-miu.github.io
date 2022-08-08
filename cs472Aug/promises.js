var fs = require('fs');
const { resolve } = require('path/posix');
let fileContent,time = Date.now();
// function writeFileWithoutPromise(callbackFn){
  // fs.readFile('./position.html',function(e,o){
  //   fileContent=o.toString();
  //   console.log("Inside callback ",Date.now()-time,fileContent.length);
  //   fs.readFile('./flexgrid.html',function(e,o){
  //       // if(e)
  //         // return callbackFn('e')
  //       fileContent=fileContent+ o.toString();
  //       fs.writeFile('newFile.html',fileContent,function(e,o){
  //           console.log(o,e)
  //       })
  //   })
// })
// }
// writeFileWithoutPromise(function(err){
//   console.log(err);
// })


// function add(a,b){
//   return a+b;
// }

// let a = add(a,b);
// let b = multiply(a,c);

const getFile = (fileName,m) => {
    let promise= new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => {
          console.log(" after getFile ",Date.now())
        if (err) {
          reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
        //   return; // and we don't want to go any further
        }
        
        resolve(m+data);
      });
    });
    console.log(promise);
    return promise;
  };

 

  const writeFile = (fileName,data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data,(err, data) => {
          console.log(" Here ")
        if (err) {
          reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
          return; // and we don't want to go any further
        }
        resolve(data);
      });
    });
  };
  // let promise = writeFile('./test','ndefined');
  // promise.then(data=>console.log(" data ",data))
  //         .catch(error=>console.log(" error "))
  return getFile('./position.html','')
  .then(data=>getFile('./flexGrid.html',data))
  .then(data2=>writeFile('./newFile.html',data2))
  .catch(err => console.error("Error ",err));

// let time = Date.now();
//   const first = new Promise((resolve, reject) => {
//     setTimeout(()=>{console.log("here first",Date.now()-time);resolve('first')}, 100, 'first');
//   });
//   const second = new Promise((resolve, reject) => {
//     setTimeout(()=>{console.log("here second",Date.now()-time);reject('second')}, 200, 'second');
//   });
  
  // first
  // .then(second)
  // .catch(err=>console.error(err));
  // Promise.any([second,first]).then(
  //   result=>console.log("result",result)
  // ).catch(error=> console.log("Promise  Error ",error))

  //Race
  // Promise.race([second,first]).then(
  //   result=>console.log("result",result)
  // ).catch(error=> console.log("Promise  Error ",error))
  
  
  // Promise.any([getFile('./position.html',''),
  // getFile('./flexGrid.html','')]).then(result => {
  //   console.log("result ",result); 
    
  // }).catch(err=>console.error(" here ",err));
  
  // const a = new Promise((_, reject) => setTimeout(reject,  100, new Error("a")));
  // const b = new Promise((resolve)   => setTimeout(resolve, 200, "b"));
  
  // Promise.race([a, b]).then(
  //     value => {
  //         console.log(`race: fulfilled with ${value}`);
  //     },
  //     reason => {
  //         console.log(`race: rejected with ${reason.message}`);
  //     }
  // );
  
  // Promise.any([a, b]).then(
  //     value => {
  //         console.log(`any:  fulfilled with ${value}`);
  //     },
  //     reason => {
  //         console.log(`any:  rejected with ${reason.errors.map(({message}) => message).join()}`);
  //     }
  // );
// // const getFirstUserData = async () => {
// //     const response = await fetch('/users.json'); // get users list
// //     const users = await response.json(); // parse JSON
// //     const user = users[0]; // pick first user
// //     const userResponse = await fetch(`/users/${user.name}`); // get user data
// //     const userData = await userResponse.json(); // parse JSON
// //     return userData;
// //   };

  // const getFirstUserData = async () => {
  //   const res = await getFile('./position.html');
  //   const res2 = await getFile('./flexGrid.html');
  //   let res3 =res.file+res2.file;
  //   console.log(res,res2,res3)
  //   const res4 = await writeFile('./newFile.html',res3+"");
  //   console.log("Here",res4)
  //   return res4;

  // };
  // console.log(" Here check ",getFirstUserData());

//   const doSomethingAsync = () => {
//     // return new Promise(resolve => {
//       setTimeout(() => {return 'I did something'}, 3000);
//     // });
//   };
//   const doSomething = async () => {
//     console.log(await doSomethingAsync());
//   };
//  doSomething() 
//  function test(){
//    return new Promise((resolve,reject)=>{
//      resolve('test');
//    })
// }

async function test(){
  return "test"
}

test().then(data=>console.log(data));
  
