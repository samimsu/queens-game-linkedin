import {
  altoMain,
  anakiwa,
  celadon,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/379",
  size: 8,
  colorRegions: [
    ["H", "H", "C", "C", "A", "A", "D", "D"],
    ["H", "H", "C", "E", "A", "D", "D", "D"],
    ["H", "H", "C", "C", "A", "G", "G", "B"],
    ["H", "H", "H", "C", "A", "G", "B", "B"],
    ["H", "H", "C", "C", "A", "A", "B", "B"],
    ["H", "F", "F", "B", "B", "B", "B", "B"],
    ["F", "F", "F", "F", "B", "B", "B", "B"],
    ["F", "F", "F", "F", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: lightOrchid,
    B: halfBaked,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightWisteria,
    G: saharaSand,
    H: nomad,
  },
  solutionsCount: 1,
  createdBy: "Sershka",
  creatorLink: "",
};

export default level;
