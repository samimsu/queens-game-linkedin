export type BoardCell = string | null;
export type Board = BoardCell[][];

export function solveQueens(board: Board, colorRegions: string[][]): Board[] {
    const n = board.length;
    const allSolutions: Board[] = [];

    findAllSolutions(colorRegions, n, allSolutions);

    return allSolutions;
}

/**
 * Find all possible solutions by trying to start from every position
 */
function findAllSolutions(
    colorRegions: string[][],
    n: number,
    allSolutions: Board[]
): void {
    const status: boolean[][] = Array(n).fill(null).map(() => Array(n).fill(false));
    const usedColors = new Set<string>();

    // Start the backtracking process
    backtrackAllSolutions(colorRegions, status, 0, n, usedColors, allSolutions);
}

/**
 * Backtracking algorithm to find all queen placements
 */
function backtrackAllSolutions(
    colorRegions: string[][],
    status: boolean[][],
    row: number,
    n: number,
    usedColors: Set<string>,
    allSolutions: Board[]
): void {
    if (row === n) {
        // All queens placed successfully, save this solution
        const solutionBoard: Board = Array(n).fill(null).map(() => Array(n).fill(null));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (status[r][c]) {
                    solutionBoard[r][c] = 'Q';
                }
            }
        }
        allSolutions.push(solutionBoard);
        return;
    }

    for (let col = 0; col < n; col++) {
        if (isValidPlacement(colorRegions, status, row, col, n, usedColors)) {
            // Place queen
            status[row][col] = true;
            usedColors.add(colorRegions[row][col]);

            // Recurse
            backtrackAllSolutions(colorRegions, status, row + 1, n, usedColors, allSolutions);

            // Backtrack
            status[row][col] = false;
            usedColors.delete(colorRegions[row][col]);
        }
    }
}

/**
 * Old function that returns first solution found
 */
export function solveQueensLegacy(board: Board, colorRegions: string[][]): Board | null {
    const n = board.length;
    const status: boolean[][] = Array(n).fill(null).map(() => Array(n).fill(false));
    const usedColors = new Set<string>();

    const solved = backtrack(colorRegions, status, 0, n, usedColors);

    if (solved) {
        // Convert status board to game board format
        const solvedBoard: Board = Array(n).fill(null).map(() => Array(n).fill(null));
        for (let r = 0; r < n; r++) {
            for (let c = 0; c < n; c++) {
                if (status[r][c]) {
                    solvedBoard[r][c] = 'Q';
                }
            }
        }
        return solvedBoard;
    }

    return null;
}

/**
 * Old backtracking algorithm that finds first solution encoutnered only 
 */
function backtrack(
    colorRegions: string[][],
    status: boolean[][],
    row: number,
    n: number,
    usedColors: Set<string>
): boolean {
    if (row === n) {
        // All queens placed successfully
        return true;
    }

    for (let col = 0; col < n; col++) {
        if (isValidPlacement(colorRegions, status, row, col, n, usedColors)) {
            // Place queen
            status[row][col] = true;
            usedColors.add(colorRegions[row][col]);

            // Recurse
            const backtrackResult = backtrack(colorRegions, status, row + 1, n, usedColors);
            if (backtrackResult) {
                return true;
            }

            // Backtrack
            status[row][col] = false;
            usedColors.delete(colorRegions[row][col]);
        }
    }

    return false;
}

/**
 * Check if placing a queen at the given position is valid
 */
function isValidPlacement(
    colorRegions: string[][],
    status: boolean[][],
    row: number,
    col: number,
    n: number,
    usedColors: Set<string>
): boolean {
    // Check column for existing queens (only need to check previous rows)
    for (let r = 0; r < row; r++) {
        if (status[r][col]) {
            return false;
        }
    }

    // Check adjacent diagonals (only previous rows)
    const diagonalChecks = [
        [row - 1, col - 1], // up-left
        [row - 1, col + 1], // up-right
    ];

    for (const [nr, nc] of diagonalChecks) {
        if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
            if (status[nr][nc]) {
                return false;
            }
        }
    }

    // Check if this color region already has a queen
    const currentColor = colorRegions[row][col];
    if (usedColors.has(currentColor)) {
        return false;
    }

    return true;
}
