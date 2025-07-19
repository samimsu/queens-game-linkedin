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
    const [cachedSolutions, setCachedSolutions] = useState<(string | null)[][][] | null>(null);
    const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
    const originalBoardRef = useRef<(string | null)[][] | null>(null);

    const handleToggleSolution = () => {
        try {
            if (!isShowingSolution) {
                // Show solution
                let solutions = cachedSolutions;

                if (!solutions) {
                    solutions = solveQueens(board, colorRegions);
                    if (solutions && solutions.length > 0) {
                        setCachedSolutions(solutions);
                    }
                }

                if (solutions && solutions.length > 0) {
                    // Save current board state before showing solution
                    originalBoardRef.current = board.map(row => [...row]);
                    setIsShowingSolution(true);
                    setCurrentSolutionIndex(0);
                    console.log(`Found ${solutions.length} solution(s)`);

                    if (onBoardChange) {
                        onBoardChange(solutions[0]);
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

    const handlePreviousSolution = () => {
        if (cachedSolutions && cachedSolutions.length > 0) {
            const newIndex = currentSolutionIndex > 0 ? currentSolutionIndex - 1 : cachedSolutions.length - 1;
            setCurrentSolutionIndex(newIndex);
            if (onBoardChange) {
                onBoardChange(cachedSolutions[newIndex]);
            }
        }
    };

    const handleNextSolution = () => {
        if (cachedSolutions && cachedSolutions.length > 0) {
            const newIndex = currentSolutionIndex < cachedSolutions.length - 1 ? currentSolutionIndex + 1 : 0;
            setCurrentSolutionIndex(newIndex);
            if (onBoardChange) {
                onBoardChange(cachedSolutions[newIndex]);
            }
        }
    };

    const solutionCount = cachedSolutions?.length || 0;
    const hasSolutions = solutionCount > 0;
    const hasMultipleSolutions = solutionCount > 1;

    return (
        <div className="w-full">
            <Button
                className={className}
                onClick={handleToggleSolution}
                disabled={hasWon}
            >
                {isShowingSolution ? "Hide Solution" : "Show Solution"}
            </Button>

            {isShowingSolution && hasSolutions && (
                <div className="mt-2 flex flex-col space-y-2">
                    <div className="text-center text-sm text-gray-600">
                        Solution {currentSolutionIndex + 1} of {solutionCount}
                    </div>

                    {hasMultipleSolutions && (
                        <div className="flex justify-center space-x-2">
                            <Button
                                className="border border-slate-500 rounded-full px-4 py-2 text-sm"
                                onClick={handlePreviousSolution}
                            >
                                ← Previous
                            </Button>
                            <Button
                                className="border border-slate-500 rounded-full px-4 py-2 text-sm"
                                onClick={handleNextSolution}
                            >
                                Next →
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ToggleSolutionButton;
