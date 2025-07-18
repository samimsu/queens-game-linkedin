import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  lavenderRose,
  macNCheese,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/154",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E"],
    ["E", "A", "A", "E", "A", "A", "E"],
    ["D", "A", "B", "B", "B", "A", "D"],
    ["D", "D", "A", "B", "A", "D", "D"],
    ["C", "D", "D", "A", "D", "D", "C"],
    ["C", "C", "G", "G", "G", "C", "C"],
    ["F", "F", "F", "G", "F", "F", "F"],
  ],
  regionColors: {
    A: lavenderRose,
    B: macNCheese,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
  },
  solutionsCount: 40,
  createdBy: "SuperBunBun",
  creatorLink: "",
};

export default level;
