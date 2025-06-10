import React, { useState, useRef } from "react";
import Button from "../Button";
import { solveQueens } from "../../utils/queensSolver";

interface ToggleSolutionButtonProps {
    hasWon: boolean;
    className?: string;
    board: (string | null)[][];
    colorRegions: string[][];
    onBoardChange?: (newBoard: (string | null)[][]) => void;
    onSolutionToggle?: (isShowingSolution: boolean) => void;
}

const ToggleSolutionButton: React.FC<ToggleSolutionButtonProps> = ({
    hasWon,
    className,
    board,
    colorRegions,
    onBoardChange,
    onSolutionToggle
}) => {
    const [isShowingSolution, setIsShowingSolution] = useState(false);
    const [cachedSolution, setCachedSolution] = useState<(string | null)[][] | null>(null);
    const originalBoardRef = useRef<(string | null)[][] | null>(null);

    const handleToggleSolution = () => {
        try {
            if (!isShowingSolution) {
                // Show solution
                let solutionBoard = cachedSolution;

                if (!solutionBoard) {
                    solutionBoard = solveQueens(board, colorRegions);
                    if (solutionBoard) {
                        setCachedSolution(solutionBoard);
                    }
                }

                if (solutionBoard) {
                    // Save current board state before showing solution
                    originalBoardRef.current = board.map(row => [...row]);
                    setIsShowingSolution(true);
                    console.log("Showing solution");

                    if (onBoardChange) {
                        onBoardChange(solutionBoard);
                    }
                    if (onSolutionToggle) {
                        onSolutionToggle(true);
                    }
                } else {
                    console.log("No solution found for this puzzle");
                }
            } else {
                // Hide solution - restore original board
                if (originalBoardRef.current) {
                    setIsShowingSolution(false);
                    console.log("Hiding solution");

                    if (onBoardChange) {
                        onBoardChange(originalBoardRef.current);
                    }
                    if (onSolutionToggle) {
                        onSolutionToggle(false);
                    }
                }
            }
        } catch (error) {
            console.error("Error toggling solution:", error);
        }
    };

    return (
        <Button
            className={className}
            onClick={handleToggleSolution}
            disabled={hasWon}
        >
            {isShowingSolution ? "Hide Solution" : "Show Solution"}
        </Button>
    );
};

export default ToggleSolutionButton;
