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
  path: "/community-level/446",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "G", "G", "G", "A"],
    ["G", "G", "G", "G", "G", "B", "A"],
    ["G", "G", "G", "G", "C", "B", "A"],
    ["G", "G", "G", "D", "C", "B", "A"],
    ["G", "F", "E", "D", "C", "B", "A"],
    ["G", "F", "E", "D", "C", "B", "A"],
    ["F", "F", "E", "D", "C", "B", "A"],
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
  createdBy: "Medy",
  creatorLink: "https://www.instagram.com/s.ntosmedy/",
};

export default level;
