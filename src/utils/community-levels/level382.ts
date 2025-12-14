import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/382",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "B", "C", "D"],
    ["A", "B", "C", "B", "C", "D"],
    ["A", "B", "C", "C", "C", "D"],
    ["A", "B", "F", "F", "D", "D"],
    ["A", "B", "E", "E", "E", "E"],
    ["A", "A", "A", "A", "E", "E"],
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
  createdBy: "Neni",
  creatorLink: "",
};

export default level;
