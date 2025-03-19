import { Board, Cell, Mark, Regions } from "./interfaces"


// TODO: da spostare in utilità e usare qualcosa di più ottimizzato rispetto a JSON
const clone = <T>(object: T): T => JSON.parse(JSON.stringify(object))

const initializeBoard = (nQueens: number): Board => Array.from({ length: nQueens }, () => Array.from({ length: nQueens }, () => Mark.Empty))

const isAround = (cellTarget: Cell, cellNear: Cell): boolean => {
    const rowDiff = Math.abs(cellTarget.row - cellNear.row)    
    const colDiff = Math.abs(cellTarget.col - cellNear.col)
    return rowDiff <= 1 && colDiff <=1
}

// devi mettere una X in tutta la riga row = cell.row
// e una X in tutte le colonne column = cell.col
const setQueen = (board: Board, cell: Cell, regions: Regions): Board => {
    if (board[cell.row][cell.col] !== Mark.Empty) return board
    const newBoard = clone(board)
    const region = regions[cell.row][cell.col]
    for (let rowIndex = 0; rowIndex < newBoard.length; rowIndex++) {
        const row = newBoard[rowIndex];
        for (let colIndex = 0; colIndex < row.length; colIndex++) {

            if (regions[rowIndex][colIndex] == region) {
                newBoard[rowIndex][colIndex] = Mark.Removed
            }

            if (rowIndex == cell.row || colIndex == cell.col || isAround(cell, { row: rowIndex, col: colIndex })) {
                if (newBoard[rowIndex][colIndex] == Mark.Empty)
                    newBoard[rowIndex][colIndex] = Mark.Removed
            }

        }
    }
    newBoard[cell.row][cell.col] = Mark.Queen
    return newBoard
}

const isNQueenProblemSolved = (board: Board): boolean => {
    const nQueens = board.length
    let totalQueens = 0;
    for (let rowIndex = 0; rowIndex < nQueens; rowIndex++) {
        for (let colIndex = 0; colIndex < nQueens; colIndex++) {
            totalQueens = board[rowIndex][colIndex] == Mark.Queen ? totalQueens++ : totalQueens
        }
    }
    return nQueens === totalQueens
}

const resolveBoard = (_board: Board, regions: Regions): Board => {
    const firstTry: Cell[] = []
    const nQueens = regions.length
    let solution: Board
    
    do {
        solution = initializeBoard(nQueens)
        let firstRun = true
        for (let rowIndex = 0; rowIndex < nQueens; rowIndex++) {
            for (let colIndex = 0; colIndex < nQueens; colIndex++) {
                if (firstRun) {
                    const tried = firstTry.find(elem => elem.row == rowIndex && elem.col == colIndex)
                    if (tried) {
                        continue
                    } else {
                        firstTry.push({row: rowIndex, col: colIndex})
                        firstRun = false
                    }
                }
                solution = setQueen(solution, { row: rowIndex, col: colIndex }, regions)
            }
        }

        if (firstTry.length >= nQueens * nQueens) {
            break
        }
    } while (!isNQueenProblemSolved(solution));
    
    console.log('board', solution)
    console.log('regions', regions)
    console.log('isNQueenProblemSolved', isNQueenProblemSolved(solution))
    return solution
}

export default resolveBoard