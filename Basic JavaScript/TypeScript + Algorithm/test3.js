// Second max

function secondMax(array) {
  try {
    const length = array.length;
    if (length == 0) {
      throw new Error("Error!");
    } else if (length >= 2) {
      array.sort((a, b) => {
        return b - a;
      });
      maxNum = array[0];
      secMaxNum = 0;
      for (let i = 1; i < length; i++) {
        if (i == length - 1) {
          return console.log(maxNum);
        } else if (maxNum > array[i]) {
          return console.log(array[i]);
        }
      }
      // console.log(array[1]);
    } else {
      return console.log(array[0]);
    }
  }
  catch (err) {
    console.error(err.message);
  }
}

secondMax([2, 3, 4, 5]);
secondMax([9, 2, 21, 21]);
secondMax([4, 4, 4, 4]);
secondMax([4123]);
secondMax([]);