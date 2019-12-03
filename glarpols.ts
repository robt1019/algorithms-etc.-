type Maze = string[][];

interface GridLocation {
  col: number;
  row: number;
}

type Direction = "up" | "down" | "left" | "right";
type RelativePosition = "above" | "below" | "toTheLeft" | "toTheRight";

function iAmAtEntrance(position: GridLocation) {
  return !!(position.row === 0 && position.col === 0);
}

function iAmInAWall(maze: Maze, position: GridLocation) {
  return !!(
    position.col === maze[0].length ||
    position.row === maze.length ||
    position.col < 0 ||
    position.row < 0
  );
}

function iAmInAHedge(maze: Maze, position: GridLocation) {
  return !!(maze[position.row][position.col] === "x");
}

function move(position: GridLocation, direction: Direction): GridLocation {
  const translations: { [key: string]: GridLocation } = {
    up: { row: position.row - 1, col: position.col },
    left: { row: position.row, col: position.col - 1 },
    down: { row: position.row + 1, col: position.col },
    right: { row: position.row, col: position.col + 1 }
  };

  return translations[direction];
}

function parentIs(direction: RelativePosition, path: GridLocation[]): boolean {
  if (path.length === 1) {
    return false;
  }

  const previousStep = path[1];
  const currentStep = path[0];

  const cameFrom = {
    above: !!(previousStep.row < currentStep.row),
    below: !!(previousStep.row > currentStep.row),
    toTheLeft: !!(previousStep.col < currentStep.col),
    toTheRight: !!(previousStep.col > currentStep.col)
  };

  return cameFrom[direction];
}

const testSimpleMaze = [[" ", " "], ["x", " "]];

const testHarderMaze = [[" ", "x", " "], [" ", " ", " "]];

const testMaze = [
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", " "]
];

const evilMaze = [
  [" ", " ", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", " ", " ", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", " ", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
  ["x", "x", "x", "x", " ", "x", "x", "x", " ", " ", " ", " ", " ", "x"],
  ["x", "x", "x", "x", " ", "x", "x", " ", " ", "x", "x", "x", " ", "x"],
  [" ", " ", " ", " ", " ", "x", "x", " ", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", " ", "x", "x", " ", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", " ", "x", "x", " ", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", " ", " ", " ", " ", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", "x", "x", "x", " ", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", "x", "x", "x", " ", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", " ", "x"],
  [" ", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", " ", " "]
];

function saveOurSpecies(maze: Maze) {
  let solutionFound = false;
  let spawnCount = 0;
  let survivorCount = 0;

  function spawnGlarpol(maze: Maze, route: GridLocation[]) {
    spawnCount++;

    if (solutionFound) {
      return;
    }

    const currentPosition = route[0];

    if (iAmAtEntrance(currentPosition)) {
      console.log(
        "Holy shit I found it! Guys guys guys I did it. We are saved!!!\n"
      );

      console.log(route);

      console.log("\n");

      survivorCount += route.length;

      solutionFound = true;

      return route;

    }

    if (iAmInAWall(maze, currentPosition)) {
      console.log(
        "What is this fresh new existence? Oh balls... I am in a wall aren't I. EXECUTE SELF DESTRUCT SEQUENCE. I die that we may live.\n"
      );
      return;
    }

    if (iAmInAHedge(maze, currentPosition)) {
      console.log(
        "I am in a hedge. I have failed and so I must fall on my sword. Do not let my death be in vain.\n"
      );
      return;
    }

    console.log(
      "Sending out my children into the world to try and save our species. I will wait here for you. Good luck spawn of mine.\n"
    );

    if (!parentIs("above", route)) {
      spawnGlarpol(maze, [move(currentPosition, "up"), ...route]);
    }
    if (!parentIs("toTheLeft", route)) {
      spawnGlarpol(maze, [move(currentPosition, "left"), ...route]);
    }
    if (!parentIs("below", route)) {
      spawnGlarpol(maze, [move(currentPosition, "down"), ...route]);
    }
    if (!parentIs("toTheRight", route)) {
      spawnGlarpol(maze, [move(currentPosition, "right"), ...route]);
    }

  }

  const exit: GridLocation = { row: maze.length - 1, col: maze[0].length - 1 };

  spawnGlarpol(maze, [exit]);

  console.log(
    `to solve this maze, we spawned ${spawnCount} children. ${survivorCount} survived`
  );
}

saveOurSpecies(evilMaze);
