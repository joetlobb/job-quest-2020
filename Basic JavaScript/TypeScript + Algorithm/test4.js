function fizzBuzz(number) {

  let by3 = "";

  switch ( number % 3) {
    case 0:
       by3 = 'Fizz';
       break;
    default:
       break;
  }

  let by5 = number % 5 == 0 ? "Buzz" : "";

  switch (by3 + by5) {
    case "":
      return;
    default:
      console.log(by3 + by5);
  }
}

fizzBuzz(3);
fizzBuzz(5);
fizzBuzz(45);
fizzBuzz(4);