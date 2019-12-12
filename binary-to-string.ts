const binaryToString = (decimalNumber: number) => {
  decimalNumber = decimalNumber * 100;
  const chars = [];
  let power = 0;
  while (decimalNumber > 0) {
      console.log(chars);
    if (chars.length > 32) {
      console.log("error");
      return;
    }

    const carry = decimalNumber % 2;
    if (carry === 0) {
      decimalNumber -= 2 ^ power;
      chars.unshift("1");
    } else {
      chars.unshift("0");
    }
    power += 1;
  }

  console.log(chars.join(""));
};

binaryToString(0.72);
