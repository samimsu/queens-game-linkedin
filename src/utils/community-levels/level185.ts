import {
  bittersweet,
  carnation,
  chardonnay,
  lavenderRose,
  lightOrchid,
  macNCheese,
  nomad,
  tallow,
} from "../colors";

const level = {
  path: "/community-level/185",
  size: 8,
  colorRegions: [
    ["F", "A", "H", "H", "H", "H", "C", "F"],
    ["A", "A", "A", "A", "H", "H", "C", "F"],
    ["H", "A", "H", "H", "H", "C", "C", "C"],
    ["H", "H", "H", "H", "H", "H", "C", "H"],
    ["H", "D", "H", "H", "H", "H", "H", "H"],
    ["D", "D", "D", "H", "H", "H", "B", "H"],
    ["E", "D", "G", "G", "B", "B", "B", "B"],
    ["E", "D", "G", "G", "G", "G", "B", "F"],
  ],
  regionColors: {
    A: lavenderRose,
    B: lightOrchid,
    C: bittersweet,
    D: chardonnay,
    E: carnation,
    F: macNCheese,
    G: tallow,
    H: nomad,
  },
  solutionsCount: 1,
  createdBy: "Mxd",
  creatorLink: "",
};

export default level;
