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
  path: "/community-level/280",
  size: 9,
  colorRegions: [
    ["B", "C", "D", "D", "D", "D", "D", "D", "D"],
    ["B", "C", "E", "E", "E", "E", "E", "E", "D"],
    ["B", "C", "F", "G", "H", "A", "A", "E", "D"],
    ["B", "C", "F", "G", "H", "H", "A", "E", "D"],
    ["B", "C", "F", "G", "G", "G", "G", "E", "D"],
    ["B", "C", "F", "F", "F", "F", "F", "E", "D"],
    ["B", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["B", "B", "B", "B", "B", "B", "C", "C", "I"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
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
  solutionsCount: 1,
  createdBy: "juju",
  creatorLink: "",
};

export default level;
