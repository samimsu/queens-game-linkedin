import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/299",
  size: 6,
  colorRegions: [
    ["F", "F", "E", "C", "D", "B"],
    ["F", "E", "E", "C", "D", "B"],
    ["F", "E", "F", "C", "D", "D"],
    ["F", "F", "F", "C", "C", "D"],
    ["A", "F", "D", "D", "D", "D"],
    ["A", "F", "F", "F", "F", "F"],
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
  createdBy: "Dan Relaxxe",
  creatorLink: "",
};

export default level;
