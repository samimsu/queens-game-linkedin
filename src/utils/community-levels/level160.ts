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
  path: "/community-level/160",
  size: 7,
  colorRegions: [
    ["D", "D", "D", "D", "D", "D", "D"],
    ["E", "E", "F", "D", "D", "D", "D"],
    ["E", "F", "F", "C", "C", "C", "D"],
    ["E", "F", "F", "C", "C", "C", "C"],
    ["E", "F", "A", "A", "A", "C", "C"],
    ["G", "F", "A", "A", "B", "A", "C"],
    ["G", "B", "B", "B", "B", "A", "C"],
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
  createdBy: "Mohd Shadmaan",
  creatorLink: "https://www.linkedin.com/in/mohd-shadmaan-a23502193",
};

export default level;
