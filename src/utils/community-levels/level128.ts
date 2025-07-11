import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/128",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "B", "B", "B", "C", "C", "D", "D", "D", "D"],
    ["A", "A", "A", "C", "C", "C", "D", "D", "F", "F"],
    ["F", "F", "F", "C", "C", "C", "F", "F", "F", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "F", "E"],
    ["I", "J", "F", "F", "F", "F", "F", "F", "E", "E"],
    ["I", "J", "J", "J", "J", "J", "E", "E", "E", "E"],
    ["I", "J", "J", "H", "H", "J", "G", "E", "E", "E"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "E"],
    ["G", "G", "G", "G", "G", "G", "E", "E", "E", "E"],
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
    I: lightOrchid,
    J: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "Jordan Fisher",
  creatorLink: "",
};

export default level;
