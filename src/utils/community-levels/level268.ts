import {
  altoMain,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/268",
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "F", "F", "F", "G"],
    ["A", "A", "B", "B", "B", "B", "B", "B", "F", "G"],
    ["A", "A", "B", "C", "C", "C", "B", "H", "H", "G"],
    ["A", "A", "B", "C", "D", "C", "B", "H", "H", "G"],
    ["C", "B", "B", "C", "D", "C", "C", "H", "H", "G"],
    ["C", "B", "C", "C", "D", "D", "C", "J", "H", "G"],
    ["C", "C", "C", "E", "D", "J", "J", "J", "H", "G"],
    ["C", "C", "C", "E", "D", "D", "D", "J", "H", "G"],
    ["E", "E", "E", "E", "I", "D", "D", "D", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: saharaSand,
    D: celadon,
    E: halfBaked,
    F: lavenderRose,
    G: lightOrchid,
    H: lightWisteria,
    I: altoMain,
    J: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Sophie",
  creatorLink: "https://www.instagram.com/sophiemindl/?hl=en",
};

export default level;
