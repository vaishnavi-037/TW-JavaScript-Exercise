const arr = [10, 18, 24, 5, 41];

function checkAdult(age) {
  return age >= 18;
}

function filter(arr, fun) {
  const n = arr.length;
  const ans = [];
  for (let i = 0; i < n; i++) {
    if (fun(arr[i])) ans.push(arr[i]);
  }

  return ans;
}

const filterArr = filter(arr, checkAdult);
console.log(filterArr);
