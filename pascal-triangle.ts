function generate(numRows: number) {
  if (numRows === 1) {
    return [[1]];
  }

  const rows = generate(numRows - 1);
  const parentRow = rows[rows.length - 1];

  const newRow = [1];
  for (let i = 1; i < parentRow.length; i++) {
    newRow.push(parentRow[i] + parentRow[i - 1]);
  }
  newRow.push(1);

  rows.push(newRow);
  return rows;
}

console.log(generate(10000));
