import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level1 = {
  path: "/community-level/1",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "B", "C", "D"],
    ["A", "A", "A", "B", "C", "D"],
    ["B", "B", "B", "B", "C", "D"],
    ["B", "B", "E", "C", "C", "D"],
    ["F", "E", "E", "C", "C", "D"],
    ["F", "F", "E", "E", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  solutionsCount: 14,
  createdBy: "BradleyDE14",
  creatorLink: "https://www.github.com/BradleyDE14",
};

export default level1;
