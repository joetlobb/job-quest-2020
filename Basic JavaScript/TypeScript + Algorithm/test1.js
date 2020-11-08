// Fibonacci Sequence

function fib(sequence) {
  const fibArrays = [1, 1];
  for (let i = 0; i < sequence-2; i++) {
    const secondLastSeq = fibArrays[fibArrays.length-2];
    const lastSeq = fibArrays[fibArrays.length-1];
    fibArrays.push(secondLastSeq+lastSeq);
  }  
  // console.log(fibArrays);
  console.log(fibArrays[sequence-1]);
}

fib(1);
fib(3);
fib(12);
fib(13);
