import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/141",
  size: 9,
  colorRegions: [
    ["I", "I", "I", "I", "H", "H", "H", "H", "D"],
    ["F", "F", "I", "I", "H", "H", "D", "D", "D"],
    ["F", "F", "F", "H", "H", "H", "H", "D", "D"],
    ["F", "F", "F", "F", "F", "E", "H", "D", "D"],
    ["C", "C", "C", "C", "E", "E", "E", "D", "D"],
    ["G", "G", "G", "C", "E", "E", "E", "E", "E"],
    ["G", "C", "C", "C", "E", "E", "A", "E", "E"],
    ["G", "C", "B", "B", "A", "A", "A", "A", "E"],
    ["G", "G", "B", "B", "B", "B", "A", "A", "E"],
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
  },
  solutionsCount: 423,
  createdBy: "Fahimeh Ryazi",
  creatorLink: "",
};

export default level;
