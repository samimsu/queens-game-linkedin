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
  path: "/community-level/190",
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C", "D", "D"],
    ["A", "A", "B", "B", "C", "C", "C", "C", "C", "D"],
    ["A", "E", "E", "B", "C", "F", "F", "F", "F", "D"],
    ["I", "E", "E", "B", "B", "F", "F", "H", "F", "D"],
    ["I", "E", "E", "E", "E", "E", "E", "H", "F", "F"],
    ["I", "E", "G", "E", "E", "E", "E", "E", "E", "F"],
    ["I", "E", "G", "J", "J", "J", "J", "J", "E", "J"],
    ["I", "I", "I", "I", "J", "J", "J", "J", "E", "J"],
    ["I", "I", "J", "J", "J", "J", "E", "E", "E", "J"],
    ["I", "I", "J", "J", "J", "J", "J", "J", "J", "J"],
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
  createdBy: "mattsemar",
  creatorLink: "https://github.com/mattsemar",
};

export default level;
