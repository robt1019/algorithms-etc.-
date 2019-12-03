// const testMaze: Maze = [
//   [true, true, false],
//   [true, true, false],
//   [true, true, true]
// ];

type Maze = boolean[][];

interface GridLocation {
  row: number;
  col: number;
}

// const tryMove = (maze: Maze, location: GridLocation) => {
//   console.log(location);

//   if (location.col === maze[0].length - 1 && location.row === maze.length - 1) {
//     console.log("found the exit!");
//     return;
//   }

//   if (maze[location.row][location.col] === false) {
//     console.log("hit a no go zone, returning to an earlier point");
//     return;
//   }

//   if (location.col === maze[0].length - 1) {
//     console.log("hit a wall on the right, going down.");
//     return tryMove(maze, { row: location.row + 1, col: location.col });
//   }

//   if (location.row === maze.length - 1) {
//     console.log("hit a wall on the bottom, going right.");
//     return tryMove(maze, { row: location.row, col: location.col + 1 });
//   }

//   tryMove(maze, { row: location.row, col: location.col + 1 });
//   tryMove(maze, { row: location.row + 1, col: location.col });
// };

// tryMove(testMaze, { row: 0, col: 0 });

const testMazeTwo = [
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true]
];

let pathCount = 0;

const findPath = (maze: Maze, path: GridLocation[]) => {
  const latestMove = path[0];

  if (latestMove.col === 0 && latestMove.row === 0) {
    pathCount++;
    console.log("found another path: ");
    console.log(path);
    return;
  }

  if (maze[latestMove.row][latestMove.col] === false) {
    return;
  }

  if (latestMove.row === 0) {
    return findPath(maze, [
      { row: latestMove.row, col: latestMove.col - 1 },
      ...path
    ]);
  }

  if (latestMove.col === 0) {
    return findPath(maze, [
      { row: latestMove.row - 1, col: latestMove.col },
      ...path
    ]);
  }

  findPath(maze, [{ row: latestMove.row, col: latestMove.col - 1 }, ...path]);

  findPath(maze, [{ row: latestMove.row - 1, col: latestMove.col }, ...path]);
};

findPath(testMazeTwo, [
  { row: testMazeTwo.length - 1, col: testMazeTwo[0].length - 1 }
]);
console.log(`found ${pathCount} paths`);
