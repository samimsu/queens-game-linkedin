import {
    altoMain,
    anakiwa,
    bittersweet,
    celadon,
    chardonnay,
    lightWisteria,
    saharaSand,
  } from "../colors";
  
  const level524 = {
    size: 7,
    colorRegions: [
      ["A", "A", "A", "A", "A", "A", "A"],
      ["A", "A", "B", "B", "A", "A", "A"],
      ["A", "A", "B", "C", "C", "A", "A"],
      ["A", "A", "D", "C", "E", "E", "E"],
      ["A", "D", "D", "F", "E", "G", "G"],
      ["A", "A", "F", "F", "E", "G", "G"],
      ["A", "E", "E", "E", "E", "G", "G"],
    ],
    regionColors: {
      A: lightWisteria,
      B: chardonnay,
      C: anakiwa,
      D: celadon,
      E: altoMain,
      F: bittersweet,
      G: saharaSand,
    },
    isNew: true,
  };
  
  export default level524;
  