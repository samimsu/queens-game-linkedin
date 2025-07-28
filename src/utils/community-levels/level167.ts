import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/167",
  size: 6,
  colorRegions: [
    ["F", "A", "B", "A", "B", "D"],
    ["A", "A", "B", "C", "B", "C"],
    ["B", "B", "B", "C", "D", "C"],
    ["A", "C", "C", "C", "D", "E"],
    ["B", "B", "D", "D", "D", "E"],
    ["F", "C", "C", "E", "E", "E"],
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
  createdBy: "rob",
  creatorLink: "",
};

export default level;
