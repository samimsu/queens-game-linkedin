import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/392",
  size: 7,
  colorRegions: [
    ["D", "G", "G", "G", "E", "E", "E"],
    ["D", "G", "G", "G", "G", "G", "G"],
    ["D", "G", "G", "F", "F", "G", "G"],
    ["G", "G", "G", "C", "F", "G", "G"],
    ["G", "G", "G", "C", "F", "G", "B"],
    ["G", "G", "G", "G", "G", "G", "B"],
    ["A", "A", "A", "G", "G", "G", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "Murilo",
  creatorLink: "",
};

export default level;
