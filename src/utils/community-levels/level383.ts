import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/383",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "B", "B", "F"],
    ["C", "C", "B", "B", "B", "F"],
    ["D", "D", "A", "A", "B", "F"],
    ["D", "D", "A", "E", "E", "F"],
    ["E", "E", "E", "E", "E", "F"],
    ["F", "F", "F", "F", "F", "F"],
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
  createdBy: "Billy Stevenson",
  creatorLink: "",
};

export default level;
