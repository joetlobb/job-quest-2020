// 1. Explain the what's similar & difference between cookie / localStorage / sessionStorage.

//   cookie stores data that has to be sent to the server. Primarily for serverside
//   reading. It has a very small size of 4kb compared to 5MB for localStorage and
//   sessionStorage.

//   localStorage allow a browser to store key/value pair with no expiration date. 
//   It is a plain text not secure by design and limited to string data, and 
//   can only be read on client side

//   sessionStorage is almost the same with localStorage but the stored data 
//   will be erased once the browser is closed. 





// 2. Today React have hooks. Do we still need a class component? If yourป answer is yes then which case that we still need to use class component.

//   To be honest, I have no knowledge about React but as I read some websites, I will put it like this.
//   Class component is no longer need, still usable, but we can just use function component instead and by using
//   hooks, we can set and use state in tn class component directly, with shorter coding, and easier to read.





// 3. Breifly describe how Virtual DOM works.

//   The DOM is created in memory cache, only computes the differences and patchs
//   only relevent elements of the DOM. Improve performance since it saves the
//   process of recalculating CSS, layout, etc. of the entire page.





// 4. Consider this React's components tree

// Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
// If we have a state at Apps component, and ComponentE component want to access that state value. 
// How do you implements this?

//   Since I have a very limited knowledge about React, I would like to answer this in an Angular version.
//   In Angular, state in any component can be accessed by output the state in the typescript and input them into
//   the component at lower level. (Apps output to > ComponentA output to > ComponentB output to > ComponentC 
//   output to > ComponentD output to > ComponentE).
//   Or we can use Eventemitter, Services, Subjects, NgRx to create Store that stores all the states of components.
//   And the state can be accessed though property injected in constructor.





// 5. What different between using relative / absolute / fixed to position the element.

//   relative position itself can be adjust away from it original position while 
//   other contents will stay the same and will not fill the space that relative 
//   position content was supposed to be.

//   absolute position is the almost the same as relative but it will be adjusted related to
//   its ancestor. 

//   fixed position is position relative to the browser and will always be at the 
//   same place when the page is scrolled





// 6. Explain the different between using callback / Promise / async await. 
// When to use and when not to.

//   callback can be used as a parameter for another function, callback can 
//   often be seen using with setTimeout(), for example
    setTimeout( function _callback() {
      // do something...
    }, timeinmillisecond);
  // callback should be used in a simple way to prevent callback hell, which is 
  // complicated, hard to read, and may raise a bug and error

  // Promise can be used with an async task which result in a resolve(value) or 
  // a reject(error). for example
    let promise = new Promise((resolve,reject) => {
      setTimeout(() => resolve("Finished"), 500);
    });
  // for .then, the first argument is a function that runs when the promise is 
  // resolved, and receives the result and the second argument of .then is a 
  // function that runs when the promise is rejected, and receives the error.
  // for .catch, in case we can use both 
  //   .then(null, handleErrorFunction) or we can use 
  //   .catch(handleErrorFunction)
  // for .finally, it has no arguments and doesn't know if promise is successful 
  // or not, a result or and error just pass through the next handler.
  // for example,
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Finished"), 500);
    });
    promise
      .finally(console.log('Processing'))
      .then((value) => console.log(value));

  // async awaits.
    // async keyword in front of a function make a function return a promise
      async function _async() {
        return something;
      }
      _async().then(alert); // 1
      
      // --- will be the same as

      async function _async() {
        return Promise.resolve(1);
      }
      _async().then(alert); // 1

    // await will have to be inside a function with aync syntax. The await keyword 
    // before a promise makes JS wait until that promise settles, before run 
    // the next line of code.

  