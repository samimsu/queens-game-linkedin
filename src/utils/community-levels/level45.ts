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
  path: "/community-level/45",
  size: 7,
  colorRegions: [
    ["E", "E", "E", "E", "E", "E", "E"],
    ["F", "G", "G", "G", "G", "G", "C"],
    ["F", "G", "G", "G", "G", "G", "C"],
    ["F", "G", "G", "D", "D", "C", "C"],
    ["D", "D", "D", "D", "B", "C", "C"],
    ["D", "A", "A", "A", "B", "C", "C"],
    ["A", "A", "B", "B", "B", "B", "B"],
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
  solutionsCount: 49,
  createdBy: "LittleFierceLovely",
  creatorLink:
    "https://www.instagram.com/littlefiercelovely?igsh=MXJ3dThza3J2b2JwZA==",
};

export default level;
