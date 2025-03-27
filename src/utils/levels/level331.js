import {
    altoMain,
    anakiwa,
    bittersweet,
    celadon,
    chardonnay,
    lightWisteria,
    nomad,
    saharaSand 
} from "../colors";

const level331 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "C"],
    ["A", "A", "A", "D", "B", "B", "C", "C"],
    ["A", "A", "D", "D", "B", "C", "C", "C"],
    ["A", "E", "E", "E", "E", "C", "F", "C"],
    ["A", "E", "E", "E", "E", "F", "F", "G"],
    ["A", "E", "E", "E", "E", "A", "F", "G"],
    ["A", "A", "H", "H", "A", "A", "G", "G"],
    ["A", "A", "A", "A", "A", "A", "A", "G"]
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad
  }
};

export default level331;