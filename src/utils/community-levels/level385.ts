import {
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
  nomad,
} from "../colors";

const level = {
  path: "/community-level/385",
  size: 6,
  colorRegions: [
    ["A", "B", "C", "C", "C", "C"],
    ["A", "B", "C", "D", "D", "D"],
    ["A", "B", "B", "D", "D", "D"],
    ["B", "B", "F", "F", "F", "D"],
    ["F", "F", "F", "D", "D", "D"],
    ["F", "E", "E", "E", "D", "D"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: nomad,
    F: bittersweet,
  },
  solutionsCount: 1,
  createdBy: "marci",
  creatorLink: "https://github.com/marcelo03h",
};

export default level;
