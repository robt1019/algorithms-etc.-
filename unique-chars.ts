const uniqueString = (string: String): boolean => {
  const characters = {};

  for (let i = 0; i < string.length; i++) {
    if (characters[string[i]]) {
      return false;
    }
    characters[string[i]] = string.charCodeAt(i);
    console.dir(characters);
  }

  return true;
};

console.log(uniqueString("a"));
console.log(uniqueString("aa"));
console.log(uniqueString("hello there"));
console.log(uniqueString("groin"));
