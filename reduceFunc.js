function getSum(total, num) {
  return total + Math.round(num);
}

function myFunc(total, num) {
  return total - num;
}

function reduce(arr, fun, ini) {
  const n = arr.length;
  let i, cum;
  if (ini === undefined) {
    i = 1;
    cum = arr[0];
  } else {
    i = 0;
    cum = ini;
  }

  for (; i < n; i++) {
    cum = fun(cum, arr[i]);
  }

  return cum;
}

const numbers = [15.5, 2.3, 1.1, 4.7];
const numbers1 = [175, 50, 25];

const reduceVal1 = reduce(numbers1, myFunc);
console.log(reduceVal1);

const reduceVal2 = reduce(numbers, getSum, 0);
console.log(reduceVal2);
