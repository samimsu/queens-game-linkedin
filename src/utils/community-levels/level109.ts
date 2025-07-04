import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  lightWisteria,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/109",
  size: 6,
  colorRegions: [
    ["C", "C", "C", "F", "E", "E"],
    ["C", "C", "F", "F", "E", "E"],
    ["C", "B", "F", "F", "E", "E"],
    ["D", "B", "E", "E", "E", "A"],
    ["D", "B", "A", "A", "A", "A"],
    ["D", "D", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: turquoiseBlue,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "RW",
  creatorLink: "",
};

export default level;
