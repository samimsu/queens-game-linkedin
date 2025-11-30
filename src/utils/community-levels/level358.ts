import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/358",
  size: 6,
  colorRegions: [
    ["D", "D", "E", "E", "E", "E"],
    ["D", "D", "E", "F", "F", "F"],
    ["D", "C", "A", "A", "A", "A"],
    ["C", "C", "A", "B", "B", "A"],
    ["C", "C", "A", "B", "B", "A"],
    ["A", "A", "A", "B", "B", "B"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "Chenuc456",
  creatorLink: "",
};

export default level;
