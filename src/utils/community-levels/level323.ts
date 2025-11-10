import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/323",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "A", "F", "F"],
    ["B", "B", "B", "A", "E", "F"],
    ["B", "A", "A", "A", "E", "E"],
    ["B", "C", "C", "D", "D", "E"],
    ["B", "B", "C", "D", "E", "E"],
    ["C", "C", "C", "D", "D", "D"],
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
  createdBy: "Bingus",
  creatorLink: "",
};

export default level;
