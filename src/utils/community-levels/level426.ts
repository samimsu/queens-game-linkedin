import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/426",
  size: 6,
  colorRegions: [
    ["C", "C", "A", "A", "D", "F"],
    ["C", "B", "A", "D", "D", "F"],
    ["C", "B", "A", "D", "D", "F"],
    ["C", "B", "B", "D", "E", "F"],
    ["C", "B", "B", "D", "E", "F"],
    ["B", "B", "B", "B", "B", "B"],
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
  createdBy: "Nicolas",
  creatorLink: "",
};

export default level;
