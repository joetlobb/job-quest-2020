// setTimeout(function callbacks() {
//   console.log('fat');
  
// }, 500);

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Finished"), 3000);
});

// promise
//   .finally(console.log('Processing'))
//   .then((value) => console.log(value));

async function _async() {
  return 1;
}
_async().then((a) => console.log(a)); // 1

async function _async2() {
  
  let result = await promise;
  console.log(result);
  return Promise.resolve(1);
}
_async2().then((a) => console.log(a)); // 1