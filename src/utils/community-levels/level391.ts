import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/391",
  size: 9,
  colorRegions: [
    ["I", "I", "I", "I", "D", "D", "D", "D", "D"],
    ["I", "A", "A", "I", "I", "I", "I", "H", "D"],
    ["I", "A", "A", "I", "C", "C", "I", "I", "D"],
    ["I", "A", "B", "B", "B", "C", "I", "I", "D"],
    ["I", "I", "I", "I", "C", "C", "I", "D", "D"],
    ["I", "I", "I", "I", "I", "D", "D", "D", "I"],
    ["G", "G", "G", "I", "I", "I", "I", "I", "I"],
    ["G", "I", "I", "I", "I", "I", "E", "E", "E"],
    ["G", "F", "F", "F", "F", "F", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "aris",
  creatorLink: "",
};

export default level;
