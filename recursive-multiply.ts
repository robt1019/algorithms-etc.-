function minProductHelper(smaller: number, bigger: number) {
  if (smaller === 0) {
    return 0;
  }

  if (smaller === 1) {
    return bigger;
  }

  const halfProd = minProductHelper(smaller / 2, bigger);

  if (smaller % 2 === 0) {
    return halfProd + halfProd;
  } else {
    return halfProd + halfProd + bigger;
  }
}

function multiply(a: number, b: number) {
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);
  return minProductHelper(smaller, bigger);
}

console.log(multiply(3, 7));
