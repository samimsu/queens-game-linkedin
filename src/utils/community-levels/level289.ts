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
  path: "/community-level/289",
  size: 11,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["C", "C", "E", "B", "B", "D", "D", "F", "A", "A", "C"],
    ["K", "C", "C", "B", "B", "D", "D", "F", "A", "A", "C"],
    ["K", "K", "C", "C", "B", "D", "D", "F", "F", "I", "C"],
    ["K", "K", "K", "C", "C", "D", "D", "F", "F", "I", "C"],
    ["K", "J", "K", "K", "C", "C", "D", "F", "F", "I", "C"],
    ["K", "J", "J", "K", "K", "C", "C", "F", "F", "I", "C"],
    ["K", "G", "G", "G", "K", "K", "C", "C", "F", "I", "C"],
    ["K", "H", "G", "G", "G", "K", "K", "C", "C", "C", "C"],
    ["K", "H", "H", "H", "H", "H", "K", "K", "C", "C", "C"],
    ["K", "K", "K", "K", "K", "K", "K", "K", "K", "C", "C"],
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
  createdBy: "Bigfoot Time!",
  creatorLink: "https://www.youtube.com/@bigfoottime1",
};

export default level;
