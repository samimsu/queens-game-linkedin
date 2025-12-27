import {
  altoMain,
  anakiwa,
  celadon,
  halfBaked,
  lightOrchid,
  lightWisteria,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/406",
  size: 7,
  colorRegions: [
    ["G", "G", "G", "G", "G", "G", "G"],
    ["G", "A", "D", "D", "D", "C", "G"],
    ["A", "A", "D", "D", "C", "C", "G"],
    ["A", "A", "D", "D", "C", "E", "G"],
    ["A", "A", "D", "D", "C", "E", "G"],
    ["A", "B", "F", "F", "F", "E", "G"],
    ["A", "B", "B", "B", "F", "E", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: altoMain,
    C: anakiwa,
    D: celadon,
    E: halfBaked,
    F: lightOrchid,
    G: saharaSand,
  },
  solutionsCount: 1,
  createdBy: "Pancakelover23",
  creatorLink: "",
};

export default level;
