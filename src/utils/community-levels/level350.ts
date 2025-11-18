import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  lightWisteria,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/350",
  size: 7,
  colorRegions: [
    ["F", "F", "D", "D", "D", "D", "D"],
    ["F", "G", "D", "D", "D", "E", "D"],
    ["F", "G", "D", "D", "E", "E", "D"],
    ["G", "G", "D", "D", "D", "D", "D"],
    ["C", "C", "C", "C", "B", "B", "B"],
    ["C", "B", "B", "B", "B", "A", "B"],
    ["C", "C", "C", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: bittersweet,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: turquoiseBlue,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "ASM",
  creatorLink: "",
};

export default level;
