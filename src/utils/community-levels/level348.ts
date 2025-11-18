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
  path: "/community-level/348",
  size: 11,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F", "B", "B", "B", "D"],
    ["F", "A", "A", "A", "F", "F", "F", "B", "D", "D", "D"],
    ["F", "F", "F", "A", "F", "F", "F", "B", "B", "B", "D"],
    ["F", "A", "A", "A", "F", "G", "F", "B", "I", "B", "D"],
    ["F", "F", "F", "A", "G", "G", "G", "B", "B", "B", "J"],
    ["F", "A", "A", "A", "K", "G", "J", "J", "J", "J", "J"],
    ["F", "F", "F", "F", "K", "E", "E", "E", "J", "J", "J"],
    ["F", "C", "C", "C", "K", "E", "I", "E", "J", "J", "H"],
    ["F", "F", "F", "K", "K", "E", "E", "E", "H", "J", "H"],
    ["F", "F", "C", "C", "K", "K", "K", "E", "H", "J", "H"],
    ["F", "K", "K", "K", "K", "K", "E", "E", "H", "H", "H"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
