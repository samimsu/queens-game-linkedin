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
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/256",
  size: 11,
  colorRegions: [
    ["D", "D", "D", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["D", "D", "D", "J", "C", "E", "E", "E", "E", "E", "J"],
    ["G", "D", "D", "C", "C", "E", "F", "F", "F", "E", "J"],
    ["G", "G", "D", "D", "C", "K", "F", "F", "F", "E", "J"],
    ["G", "G", "G", "D", "K", "K", "D", "D", "F", "E", "J"],
    ["A", "A", "G", "D", "D", "D", "D", "D", "F", "E", "J"],
    ["I", "A", "G", "G", "G", "G", "D", "D", "F", "E", "J"],
    ["I", "A", "A", "G", "G", "G", "F", "F", "F", "E", "J"],
    ["I", "A", "F", "F", "F", "F", "F", "B", "B", "E", "J"],
    ["F", "F", "F", "H", "H", "E", "E", "E", "E", "E", "J"],
    ["F", "F", "F", "H", "H", "H", "J", "J", "J", "J", "J"],
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
    K: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "zahrainn",
  creatorLink: "",
};

export default level;
