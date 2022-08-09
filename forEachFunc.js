function forEach(arr, func) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let res = func(arr[i]);
    if (res != undefined) console.log(res);
  }
}

function computeSquare(element) {
  console.log(element * element);
  return;
}

function computeSquareRoot(element) {
  return Math.sqrt(element);
}

let number = [1, 3, 4, 9, 8];
forEach(number, computeSquare);

let number1 = [1, 9, 16, 81, 64];
forEach(number1, computeSquareRoot);
