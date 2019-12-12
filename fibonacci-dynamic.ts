var fibonacci = function(n: number, memo: { [key: string]: number }) {
  if (memo[n]) {
    return memo[n];
  } else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
};

console.log(fibonacci(200, { 1: 1, 2: 1 }));
