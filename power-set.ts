const powerSet = (set: number[], index: number): number[][] => {
  let allSubsets: number[][];

  if (set.length === index) {
    allSubsets = [];
    allSubsets.push([]);
    return allSubsets;
  } else {
    allSubsets = powerSet(set, index + 1);
    const moreSubsets = [];
    for (let i = 0; i < allSubsets.length; i++) {
      const newSubset = [];
      newSubset.push(...allSubsets[i]);
      newSubset.push(set[index]);
      moreSubsets.push(newSubset);
    }
    allSubsets.push(...moreSubsets);
    return allSubsets;
  }
};

const testSet = [1,2,3,4];
// const testSet = [1, 2];

const result = powerSet(testSet, 0);
console.log(result);
console.log(result.length);
