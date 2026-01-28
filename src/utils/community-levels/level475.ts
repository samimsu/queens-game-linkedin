import {
  altoMain,
  bittersweet,
  chardonnay,
  halfBaked,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/475",
  size: 7,
  colorRegions: [
    ["B", "D", "D", "A", "F", "F", "C"],
    ["B", "A", "D", "A", "A", "C", "C"],
    ["B", "A", "D", "A", "A", "C", "C"],
    ["A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "A", "A", "A", "G", "C"],
    ["B", "B", "A", "A", "A", "G", "C"],
    ["B", "E", "E", "A", "G", "G", "C"],
  ],
  regionColors: {
    A: turquoiseBlue,
    B: altoMain,
    C: halfBaked,
    D: chardonnay,
    E: saharaSand,
    F: nomad,
    G: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "Sasa",
  creatorLink: "",
};

export default level;
