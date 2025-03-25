
import { altoMain, anakiwa, bittersweet, celadon, chardonnay, lightWisteria, saharaSand } from "../colors";

const level1 = {
  size: 7,
  colorRegions: [
  ["A", "A", "B", "B", "B", "B", "C"],
  ["A", "A", "A", "B", "C", "C", "C"],
  ["D", "A", "E", "B", "C", "C", "C"],
  ["D", "D", "D", "F", "F", "C", "C"],
  ["D", "G", "G", "F", "F", "F", "C"],
  ["D", "G", "G", "G", "F", "C", "C"],
  ["D", "D", "G", "C", "C", "C", "C"]
],
  regionColors: {
    A: lightWisteria, B: chardonnay, C: anakiwa, D: celadon, E: altoMain, F: bittersweet, G: saharaSand
  }
};

export default level1;
