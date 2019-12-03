const removeDuplicateChars = (string: String): String => {
  const chars = string.split("");

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    let count = 0;
    for (let j = 0; j < chars.length; j++) {
      if (char === chars[j]) {
        count++;
        if (count >= 2) {
          chars[j] = null;
        }
      }
    }
  }

  return chars.filter(char => char !== null).join("");
};

const removeDuplicateCharsTwo = (string: String): String => {
  const chars = string.split("");

  let tail = 1;

  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      if (chars[i] === chars[j]) {
        break;
      }
      if (j === tail) {
        chars[tail] = chars[i];
        tail++;
      }
    }
    return chars.join("");
  }
};

const testCases = ["a", "aa", "word", "I am mad", "adam"];

testCases.forEach(testcase => console.log(removeDuplicateChars(testcase)));
testCases.forEach(testcase => console.log(removeDuplicateCharsTwo(testcase)));
