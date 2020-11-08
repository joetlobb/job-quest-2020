// Array shift

function shift(array, direction, count) {
  for (let i = 0; i < count; i++) {
    savedArray = [...array];

    if (direction == "left") {
      array.splice(-1, 1);
      array.splice(0, 0, savedArray[savedArray.length - 1]);
    } else if (direction == "right") {
      array.splice(0, 1);
      array.splice(savedArray.length - 1, 0, savedArray[0]);
    }
  }
  console.log(array);
}

shift(['Orange', 'Cap', 'Innovative', 'Company', 'Limited'], "left", 1)
shift(['Orange', 'Cap', 'Innovative', 'Company', 'Limited'], "left", 2)
shift(['Orange', 'Cap', 'Innovative', 'Company', 'Limited'], "left", 3)
shift(['Orange', 'Cap', 'Innovative', 'Company', 'Limited'], "right", 1)
shift(['Orange', 'Cap', 'Innovative', 'Company', 'Limited'], "right", 2)
shift(['Orange', 'Cap', 'Innovative', 'Company', 'Limited'], "right", 3)