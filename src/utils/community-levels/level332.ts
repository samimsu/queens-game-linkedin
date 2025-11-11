import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/332",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "B", "A", "B"],
    ["B", "C", "B", "B", "B", "B"],
    ["B", "C", "C", "C", "C", "B"],
    ["B", "B", "E", "B", "B", "B"],
    ["F", "E", "E", "D", "D", "B"],
    ["F", "E", "D", "D", "D", "B"],
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
  createdBy: "ArneVC",
  creatorLink: "",
};

export default level;
