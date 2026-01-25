import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/449",
  size: 6,
  colorRegions: [
    ["B", "B", "B", "B", "B", "C"],
    ["B", "B", "B", "C", "A", "C"],
    ["F", "B", "E", "C", "C", "C"],
    ["F", "E", "E", "C", "C", "D"],
    ["F", "E", "E", "D", "C", "D"],
    ["F", "F", "D", "D", "D", "D"],
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
  createdBy: "Lipex127",
  creatorLink: "",
};

export default level;
