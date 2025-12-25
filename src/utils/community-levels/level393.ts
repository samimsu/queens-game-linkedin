import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/393",
  size: 9,
  colorRegions: [
    ["F", "F", "D", "D", "D", "D", "D", "D", "D"],
    ["D", "D", "D", "D", "G", "D", "D", "A", "A"],
    ["D", "D", "D", "G", "G", "G", "D", "D", "D"],
    ["D", "D", "G", "C", "C", "C", "G", "D", "D"],
    ["D", "G", "G", "C", "E", "E", "G", "G", "D"],
    ["D", "D", "G", "E", "C", "C", "G", "D", "D"],
    ["D", "D", "D", "G", "G", "G", "D", "D", "I"],
    ["B", "D", "D", "D", "G", "D", "D", "D", "I"],
    ["B", "D", "D", "D", "D", "H", "D", "D", "I"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
  },
  solutionsCount: 1,
  createdBy: "Mbk021",
  creatorLink: "",
};

export default level;
