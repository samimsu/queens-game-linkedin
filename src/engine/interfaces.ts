export enum Mark {
    Removed = "X",
    Queen = "Q",
    Empty = null
}

export type Region = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K"

export type Board = Mark[][]

export type Regions = Region[][]

export type Cell = {
    row: number,
    col: number
}

export type Hint = {
    highlightedCells: Cell[],
    crossedCells: Cell[],
    toRemove: Cell[],
    queen?: Cell
    message: React.ReactNode
}