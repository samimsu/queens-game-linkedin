import { Board, Mark, Regions } from "../interfaces";
import checkUnplacedX from "./checkUnplacedX";

const board: Board = [
    [Mark.Queen, Mark.Empty, Mark.Empty, Mark.Empty],
    [Mark.Empty, Mark.Empty, Mark.Empty, Mark.Empty],
    [Mark.Empty, Mark.Empty, Mark.Empty, Mark.Empty],
    [Mark.Empty, Mark.Empty, Mark.Empty, Mark.Empty],
]

const regions: Regions = [
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"],
    ["A", "B", "C", "D"]
]

const result = checkUnplacedX(board, regions)

const expected: Board = [
    [Mark.Empty, Mark.Empty, Mark.Empty, Mark.Empty],
    [Mark.Removed, Mark.Empty, Mark.Empty, Mark.Empty],
    [Mark.Removed, Mark.Empty, Mark.Empty, Mark.Empty],
    [Mark.Removed, Mark.Empty, Mark.Empty, Mark.Empty]
]

console.log(JSON.stringify(result) === JSON.stringify(expected)) // true