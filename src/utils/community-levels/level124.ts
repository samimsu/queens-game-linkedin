import { alto, manz, tallow } from "../colors";

const level = {
  path: "/community-level/124",
  size: 9,
  colorRegions: [
    ["C", "C", "C", "C", "D", "H", "H", "H", "H"],
    ["C", "F", "F", "F", "D", "H", "H", "H", "H"],
    ["C", "F", "E", "F", "D", "B", "B", "B", "H"],
    ["C", "F", "E", "F", "D", "D", "D", "B", "H"],
    ["C", "F", "E", "F", "D", "B", "B", "B", "H"],
    ["C", "F", "F", "F", "D", "B", "G", "B", "H"],
    ["C", "C", "C", "A", "D", "B", "B", "B", "H"],
    ["C", "C", "A", "A", "A", "I", "I", "I", "I"],
    ["C", "C", "C", "A", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: alto,
    B: manz,
    C: tallow,
    D: tallow,
    E: tallow,
    F: manz,
    G: tallow,
    H: tallow,
    I: tallow,
  },
  solutionsCount: 82,
  createdBy: "Amyloumathews",
  creatorLink: "https://github.com/amyloumathews",
};

export default level;
