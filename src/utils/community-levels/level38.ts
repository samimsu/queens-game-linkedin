import {
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/38",
  size: 11,
  colorRegions: [
    ["I", "I", "I", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["I", "C", "I", "B", "B", "B", "A", "A", "A", "B", "B"],
    ["I", "C", "B", "B", "G", "B", "A", "K", "A", "B", "B"],
    ["I", "C", "B", "G", "G", "B", "A", "K", "A", "B", "B"],
    ["I", "C", "B", "B", "B", "G", "A", "K", "A", "B", "B"],
    ["I", "C", "C", "C", "C", "B", "A", "A", "A", "B", "B"],
    ["I", "E", "F", "H", "H", "F", "H", "D", "D", "D", "B"],
    ["I", "E", "F", "H", "F", "H", "H", "H", "D", "B", "B"],
    ["I", "I", "F", "F", "H", "H", "H", "H", "D", "B", "B"],
    ["I", "J", "F", "H", "F", "H", "H", "H", "D", "B", "B"],
    ["J", "J", "F", "H", "H", "F", "H", "D", "D", "D", "B"],
  ],
  regionColors: {
    A: lavenderRose,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lightWisteria,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Nimaaa",
  creatorLink: "https://github.com/n-faro",
};

export default level;
