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
  path: "/community-level/8",
  size: 7,
  colorRegions: [
    ["A", "B", "C", "D", "E", "F", "F"],
    ["A", "B", "C", "D", "E", "E", "E"],
    ["A", "B", "C", "D", "D", "D", "D"],
    ["A", "B", "C", "D", "C", "C", "G"],
    ["A", "B", "B", "D", "B", "B", "G"],
    ["A", "A", "A", "A", "A", "A", "G"],
    ["G", "G", "G", "G", "G", "G", "G"],
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
  createdBy: "Ali Heskol",
  creatorLink: "https://github.com/Ali-Heskol",
};

export default level;
