function compare(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }
  
  let arr = [10, 5, 3];
  arr.sort(compare);
  
  console.log(arr); // [3, 5, 10]