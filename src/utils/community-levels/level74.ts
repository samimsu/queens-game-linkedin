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
  path: "/community-level/74",
  size: 10,
  colorRegions: [
    ["J", "J", "J", "J", "J", "G", "J", "J", "J", "J"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I", "J"],
    ["I", "H", "H", "A", "C", "B", "B", "B", "B", "J"],
    ["I", "J", "H", "A", "C", "B", "B", "B", "B", "J"],
    ["I", "J", "H", "A", "C", "C", "A", "B", "B", "J"],
    ["I", "D", "H", "A", "C", "A", "A", "B", "B", "J"],
    ["I", "J", "H", "H", "C", "A", "H", "H", "H", "J"],
    ["I", "J", "H", "H", "H", "H", "H", "H", "E", "J"],
    ["I", "J", "H", "F", "H", "H", "H", "H", "H", "J"],
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
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
  createdBy: "LS23",
  creatorLink: "",
};

export default level;
