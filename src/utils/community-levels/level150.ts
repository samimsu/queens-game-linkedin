import {
  bittersweet,
  celadon,
  coldPurple,
  halfBaked,
  macNCheese,
  malibu,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/150",
  size: 7,
  colorRegions: [
    ["A", "A", "C", "C", "A", "A", "F"],
    ["A", "D", "D", "C", "A", "F", "F"],
    ["A", "D", "C", "C", "A", "A", "F"],
    ["G", "A", "C", "A", "A", "A", "A"],
    ["G", "A", "C", "E", "E", "B", "B"],
    ["G", "A", "A", "A", "E", "A", "B"],
    ["G", "G", "G", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: macNCheese,
    B: saharaSand,
    C: coldPurple,
    D: halfBaked,
    E: malibu,
    F: celadon,
    G: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "Dillyn",
  creatorLink: "",
};

export default level;
