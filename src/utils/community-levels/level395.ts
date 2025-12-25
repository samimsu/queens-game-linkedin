import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  lightWisteria,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/395",
  size: 6,
  colorRegions: [
    ["A", "C", "F", "F", "F", "F"],
    ["F", "C", "B", "B", "B", "B"],
    ["F", "C", "F", "F", "D", "D"],
    ["F", "C", "F", "E", "F", "F"],
    ["F", "C", "F", "F", "F", "F"],
    ["F", "C", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: turquoiseBlue,
  },
  solutionsCount: 1,
  createdBy: "SD",
  creatorLink: "",
};

export default level;
