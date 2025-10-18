import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/304",
  size: 6,
  colorRegions: [
    ["D", "E", "A", "F", "D", "C"],
    ["C", "D", "B", "D", "D", "A"],
    ["E", "B", "B", "A", "A", "A"],
    ["F", "B", "C", "E", "F", "A"],
    ["E", "B", "C", "F", "F", "A"],
    ["D", "C", "C", "E", "F", "F"],
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
  createdBy: "Drona",
  creatorLink: "",
};

export default level;
