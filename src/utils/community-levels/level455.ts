import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/455",
  size: 6,
  colorRegions: [
    ["A", "F", "C", "D", "E", "F"],
    ["B", "B", "C", "D", "E", "C"],
    ["C", "C", "C", "D", "E", "F"],
    ["A", "B", "D", "D", "E", "F"],
    ["A", "F", "B", "B", "D", "E"],
    ["D", "E", "D", "D", "F", "F"],
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
  createdBy: "Brubssss",
  creatorLink: "https://www.instagram.com/brunoay_/",
};

export default level;
