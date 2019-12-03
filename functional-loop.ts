function loop(loopCount: number) {
  console.log("In a loop");

  if (loopCount === 1) {
    console.log(`loop called with ${loopCount}`);
    return;
  }

  loop(loopCount - 1);

  console.log(`loop called with ${loopCount}`);
}

loop(5);

function customLoop(loopCount: number, callback: (key: number) => void) {
  callback(loopCount);

  if (loopCount === 1) {
    return;
  }

  customLoop(loopCount - 1, callback);
}

customLoop(20, (key: number) => console.log(key));

function iterator(array: any[], callback: (item: any, key: number) => any) {
  function iteratorRecursive(key: number) {
    if (key === array.length) {
      return;
    }

    callback(array[key], key);

    iteratorRecursive(key + 1);
  }

  iteratorRecursive(0);
}

const testArray = ["five", "silly", "frogs", "are", "bathing"];

iterator(testArray, (item, key) =>
  console.log(`'${item}' is found at element ${key} in the array`)
);

console.log("\n");

testArray.forEach((item, key) =>
  console.log(`'${item}' is found at element ${key} in the array`)
);

function baseCaseLess() {
  console.log(new Date().getSeconds());
  if (new Date().getSeconds() % 2 === 0) {
    return;
  }

  baseCaseLess();
}

baseCaseLess();
