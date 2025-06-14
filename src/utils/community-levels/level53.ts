import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/53",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "G", "G", "G", "G"],
    ["G", "A", "A", "A", "A", "A", "G"],
    ["B", "B", "B", "D", "D", "G", "G"],
    ["C", "C", "B", "B", "D", "G", "G"],
    ["C", "C", "B", "B", "D", "D", "D"],
    ["C", "C", "C", "C", "E", "E", "F"],
    ["C", "C", "C", "C", "E", "E", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 4,
  createdBy: "aztazt",
  creatorLink: "",
};

export default level;
