import {
  alto,
  anakiwa,
  carnation,
  coldPurple,
  feijoa,
  halfBaked,
  lightOrchid,
  macNCheese,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/180",
  size: 10,
  colorRegions: [
    ["B", "B", "B", "B", "B", "B", "A", "A", "A", "A"],
    ["B", "B", "B", "C", "C", "C", "C", "F", "F", "A"],
    ["E", "B", "C", "C", "D", "D", "C", "C", "F", "F"],
    ["E", "E", "C", "D", "D", "D", "D", "C", "C", "C"],
    ["E", "D", "D", "D", "D", "D", "D", "D", "D", "C"],
    ["G", "G", "G", "G", "D", "D", "G", "G", "G", "G"],
    ["G", "I", "G", "G", "G", "G", "G", "G", "I", "G"],
    ["J", "I", "I", "I", "I", "I", "I", "I", "I", "H"],
    ["J", "J", "I", "I", "I", "I", "I", "I", "I", "H"],
    ["J", "J", "J", "I", "I", "I", "I", "I", "H", "H"],
  ],
  regionColors: {
    A: carnation,
    B: macNCheese,
    C: saharaSand,
    D: feijoa,
    E: halfBaked,
    F: alto,
    G: anakiwa,
    H: nomad,
    I: lightOrchid,
    J: coldPurple,
  },
  solutionsCount: 1,
  createdBy: "Roses",
  creatorLink: "",
};

export default level;
