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
  path: "/community-level/440",
  size: 10,
  colorRegions: [
    ["J", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "B", "J"],
    ["A", "B", "C", "D", "D", "D", "D", "D", "D", "J"],
    ["A", "B", "C", "D", "E", "F", "I", "I", "D", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "D", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "H", "J"],
    ["A", "B", "C", "D", "E", "F", "G", "E", "E", "J"],
    ["A", "B", "C", "D", "E", "E", "E", "E", "E", "J"],
    ["A", "B", "C", "C", "C", "C", "C", "C", "C", "J"],
    ["A", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
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
  createdBy: "Kerry",
  creatorLink: "https://github.com/kerry-tarrant",
};

export default level;
