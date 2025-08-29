// @ts-ignore
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
  path: "/community-level/236",
  size: 7,
  colorRegions: [
    ["B", "B", "B", "B", "B", "F", "F"],
    ["B", "A", "A", "A", "A", "A", "F"],
    ["C", "A", "G", "G", "E", "E", "E"],
    ["C", "A", "G", "A", "A", "A", "E"],
    ["C", "A", "G", "G", "G", "A", "E"],
    ["C", "A", "A", "A", "A", "A", "D"],
    ["C", "C", "C", "C", "C", "A", "D"],
  ],
  regionColors: {
    A: bittersweet,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "snich",
  creatorLink: "",
};

export default level;
