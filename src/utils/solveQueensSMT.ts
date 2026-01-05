// Adapted from the implementation described here:
// https://buttondown.com/hillelwayne/archive/solving-linkedin-queens-with-smt/
export async function getSolutionsSMT(
  board: string[][],
  onSolutionFound?: (solution: number[][]) => Promise<boolean>,
) {
  const { init } = require("z3-solver");
  const { Context } = await init();
  const { Solver, And, Or, Distinct, Int } = new Context("main");
  const solver = new Solver();
  const queens = Array.from({ length: board.length }, (_, i) =>
    Int.const(`q${i}`),
  );
  for (let i = 0; i < board.length; i++) {
    solver.add(And(queens[i].ge(0), queens[i].lt(board.length)));
  }

  for (let i = 0; i < board.length - 1; i++) {
    const q1 = queens[i];
    const q2 = queens[i + 1];
    solver.add(And(q1.sub(q2).neq(1), q2.sub(q1).neq(1)));
  }

  const regions = new Map<string, { row: number; col: number }[]>();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const color = board[i][j];
      if (!regions.has(color)) {
        regions.set(color, []);
      }
      regions.get(color)?.push({ row: i, col: j });
    }
  }

  for (const [, coords] of regions.entries()) {
    const orClauses = coords.map(({ row, col }) => queens[row].eq(col));
    solver.add(Or(...orClauses));
  }
  solver.add(Distinct(...queens));
  const checkResult = await solver.check();

  if (checkResult.toString() === "sat") {
    const model = solver.model();
    const solutions: number[][][] = [];

    const solution: number[][] = [];
    for (let i = 0; i < board.length; i++) {
      const row = Number(model.get(queens[i]).value());
      solution.push([i, row]);
    }

    solutions.push(solution);
    if (onSolutionFound) {
      const shouldStop = await onSolutionFound(solution);
      if (shouldStop) return true;
    }
    // see if there are other solutions
    while (true) {
      // Block the current solution
      const model = solver.model();
      const notSame = Or(
        ...solution.map(([i]) => model.get(queens[i]).neq(queens[i])),
      );
      solver.add(notSame);
      const nextCheckResult = await solver.check();
      if (nextCheckResult.toString() !== "sat") {
        break; // No more solutions
      }

      solution.splice(0, solution.length);
      for (let i = 0; i < board.length; i++) {
        const row = Number(model.get(queens[i]).value());
        solution.push([i, row]);
      }

      solutions.push(solution);
      if (onSolutionFound) {
        const shouldStop = await onSolutionFound(solution);
        if (shouldStop) return true;
      }
    }

    return solutions;
  }
  return [];
}
