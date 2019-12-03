const array = [];

const tops = [0, 1, 2];

const push = (data, stackNumber) => {
  array[tops[stackNumber - 1] + 3] = data;
  tops[stackNumber - 1] += 3;
};

const pop = stackNumber => {
  const temp = array[tops[stackNumber - 1]];
  array[(tops[stackNumber - 1] -= 3)];
  return temp;
};

push("poop", 1);
push("panda", 1);
push("leopard", 1);

push("gingerbread", 2);
push("icecream", 2);

console.log(pop(2));
console.log(pop(1));
