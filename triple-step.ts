let count = 0;

function steps(n: number, memo: any) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 0;
  } else if(memo[n] > -1) {
      return memo[n];
  } else {
    memo[n] = steps(n - 3, memo) + steps(n - 2, memo) + steps(n - 3, memo);
    return memo[n];
  }
}

console.log(steps(36, {}));
