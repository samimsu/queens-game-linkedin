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
  path: "/community-level/315",
  size: 7,
  colorRegions: [
    ["G", "C", "D", "D", "D", "B", "B"],
    ["G", "C", "E", "E", "D", "B", "B"],
    ["G", "C", "C", "E", "D", "A", "B"],
    ["G", "F", "C", "E", "D", "A", "B"],
    ["G", "F", "C", "C", "C", "F", "F"],
    ["G", "F", "F", "F", "C", "F", "F"],
    ["G", "G", "G", "F", "F", "F", "F"],
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
  solutionsCount: 1,
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
