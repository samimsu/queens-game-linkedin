import {
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lavenderRose,
  lightWisteria,
  manz,
} from "../colors";

const level = {
  path: "/community-level/169",
  size: 7,
  colorRegions: [
    ["D", "D", "D", "D", "D", "D", "G"],
    ["A", "A", "D", "C", "G", "G", "G"],
    ["G", "B", "B", "C", "C", "G", "G"],
    ["G", "G", "G", "C", "C", "G", "G"],
    ["E", "E", "G", "F", "F", "G", "G"],
    ["E", "E", "F", "F", "F", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lavenderRose,
    F: bittersweet,
    G: manz,
  },
  solutionsCount: 1,
  createdBy: "Amandine",
  creatorLink: "",
};

export default level;
