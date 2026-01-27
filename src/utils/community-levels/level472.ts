import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightOrchid,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/472",
  size: 11,
  colorRegions: [
    ["I", "I", "I", "G", "G", "G", "G", "K", "K", "K", "F"],
    ["I", "I", "J", "J", "G", "K", "K", "K", "K", "K", "F"],
    ["J", "J", "J", "G", "G", "G", "G", "G", "G", "K", "F"],
    ["K", "J", "J", "J", "K", "K", "K", "K", "K", "K", "F"],
    ["K", "J", "K", "K", "K", "H", "H", "H", "H", "F", "F"],
    ["K", "J", "K", "H", "H", "H", "H", "H", "F", "F", "E"],
    ["K", "J", "K", "K", "K", "K", "K", "K", "F", "F", "E"],
    ["K", "K", "K", "C", "C", "C", "D", "D", "D", "F", "E"],
    ["K", "K", "K", "K", "C", "C", "D", "D", "D", "E", "E"],
    ["K", "K", "C", "C", "C", "C", "A", "A", "A", "E", "E"],
    ["K", "K", "C", "C", "B", "B", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lavenderRose,
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
  createdBy: "Helly",
  creatorLink: "https://youtube.com/@hellysolanki?si=IE-8KCC_QWoXdCre",
};

export default level;
