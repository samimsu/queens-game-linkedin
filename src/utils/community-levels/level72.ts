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
  path: "/community-level/72",
  size: 11,
  colorRegions: [
    ["G", "G", "G", "G", "H", "H", "H", "H", "H", "H", "H"],
    ["G", "A", "G", "H", "H", "I", "I", "I", "I", "I", "I"],
    ["G", "A", "G", "H", "I", "I", "I", "J", "J", "J", "J"],
    ["G", "A", "A", "A", "J", "J", "J", "J", "J", "K", "K"],
    ["G", "B", "B", "A", "C", "C", "C", "C", "C", "C", "C"],
    ["G", "B", "A", "A", "B", "B", "B", "B", "B", "B", "C"],
    ["G", "B", "B", "B", "B", "B", "D", "D", "D", "D", "C"],
    ["B", "B", "B", "E", "E", "E", "E", "E", "E", "D", "D"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "E", "E", "D"],
    ["F", "F", "F", "F", "F", "F", "F", "F", "F", "E", "D"],
    ["F", "F", "E", "E", "E", "E", "E", "E", "E", "E", "D"],
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
  createdBy: "hallie123",
  creatorLink: "",
};

export default level;
