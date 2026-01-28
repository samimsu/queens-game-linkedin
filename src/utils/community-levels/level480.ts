import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lavenderRose,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/480",
  size: 7,
  colorRegions: [
    ["A", "F", "F", "F", "G", "D", "D"],
    ["A", "A", "F", "F", "G", "G", "D"],
    ["B", "A", "A", "E", "E", "D", "D"],
    ["B", "B", "A", "E", "E", "D", "D"],
    ["C", "B", "B", "E", "E", "D", "D"],
    ["C", "E", "E", "E", "E", "D", "D"],
    ["D", "D", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: lavenderRose,
  },
  solutionsCount: 1,
  createdBy: "JimH",
  creatorLink: "",
};

export default level;
