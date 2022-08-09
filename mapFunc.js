const arr = [10, 18, 24, 5, 41];

function double(a) {
  return a * 2;
}

function map(arr, fun) {
  const n = arr.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    ans[i] = fun(arr[i]);
  }

  return ans;
}

const mapArr = map(arr, double);
console.log(mapArr);
