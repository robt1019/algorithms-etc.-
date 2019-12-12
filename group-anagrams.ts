const group = (strings: string[]) => {
  const dictionary = {};

  for (let i = 0; i < strings.length; i++) {
    const string = strings[i];

    const key = string
      .replace(' ', '')
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    if (dictionary[key]) {
      dictionary[key].push(string);
    } else {
      dictionary[key] = [string];
    }
  }

  let sorted = [];

  Object.keys(dictionary).forEach(key => {
    sorted = sorted.concat(dictionary[key]);
  });

  return sorted;
};

const testStrings = [
  "Listen",
  "Dog",
  "Silent",
  "God",
  "Dormitory",
  "Dirty room"
];

console.log(group(testStrings));
