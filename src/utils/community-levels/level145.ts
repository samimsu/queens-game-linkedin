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
  path: "/community-level/145",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "E", "F", "F", "F"],
    ["G", "G", "G", "E", "F", "F", "F"],
    ["G", "G", "G", "E", "F", "F", "F"],
    ["D", "D", "G", "E", "E", "A", "A"],
    ["D", "C", "C", "E", "E", "E", "A"],
    ["D", "C", "B", "B", "B", "B", "A"],
    ["D", "C", "C", "C", "C", "B", "B"],
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
  solutionsCount: 57,
  createdBy: "JustHodlAlex",
  creatorLink: "",
};

export default level;
