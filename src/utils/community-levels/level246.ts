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
  path: "/community-level/246",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "D"],
    ["A", "A", "G", "G", "G", "C", "D"],
    ["D", "E", "B", "B", "G", "C", "D"],
    ["D", "E", "B", "B", "B", "C", "D"],
    ["D", "F", "F", "F", "C", "C", "D"],
    ["D", "D", "F", "D", "C", "C", "D"],
    ["D", "D", "D", "D", "D", "D", "D"],
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
  solutionsCount: 1,
  createdBy: "koca358",
  creatorLink: "",
};

export default level;
