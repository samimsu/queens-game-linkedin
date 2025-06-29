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
  path: "/community-level/97",
  size: 7,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "B"],
    ["A", "A", "B", "B", "B", "C", "C"],
    ["D", "A", "B", "A", "F", "C", "C"],
    ["D", "D", "A", "F", "F", "C", "C"],
    ["D", "D", "E", "E", "C", "G", "C"],
    ["D", "E", "E", "E", "E", "G", "C"],
    ["D", "D", "D", "D", "E", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 16,
  createdBy: "EV1130",
  creatorLink: "",
};

export default level;
