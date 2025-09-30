import {
  altoMain,
  anakiwa,
  bittersweet,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/282",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "A", "J", "J", "J", "J", "J", "A", "A", "A"],
    ["B", "J", "J", "C", "C", "C", "J", "A", "A", "A"],
    ["B", "J", "J", "C", "G", "G", "J", "J", "A", "A"],
    ["B", "B", "B", "C", "C", "G", "D", "D", "D", "A"],
    ["H", "I", "I", "C", "G", "G", "D", "E", "D", "A"],
    ["I", "I", "I", "C", "C", "C", "D", "E", "D", "F"],
    ["I", "F", "F", "I", "I", "I", "D", "E", "D", "F"],
    ["I", "F", "F", "F", "I", "I", "D", "D", "D", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: turquoiseBlue,
    C: anakiwa,
    D: halfBaked,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: lavenderRose,
  },
  solutionsCount: 1,
  createdBy: "Leonetta",
  creatorLink: "",
};

export default level;
