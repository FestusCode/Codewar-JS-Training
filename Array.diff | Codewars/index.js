function arrayDiff(a, b) {
  return a.filter((item) => b.indexOf(item) === -1);
}

arrayDiff([1, 2], [1]); // [2]
arrayDiff([1, 2, 2], [1]); // [2,2]
arrayDiff([1, 2, 2], [2]); //[1]
arrayDiff([1, 2, 2], []); //[1,2,2]
arrayDiff([], [1, 2]); // []
arrayDiff([1, 2, 3], [1, 2]); //[3]
