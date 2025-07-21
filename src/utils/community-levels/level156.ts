import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/156",
  size: 10,
  colorRegions: [
    ["H", "H", "I", "I", "I", "J", "J", "A", "D", "D"],
    ["H", "H", "I", "I", "I", "J", "J", "A", "D", "D"],
    ["H", "I", "I", "J", "J", "J", "J", "A", "D", "D"],
    ["H", "I", "I", "J", "J", "J", "J", "A", "D", "C"],
    ["H", "I", "I", "J", "J", "A", "A", "A", "C", "C"],
    ["H", "I", "I", "J", "E", "E", "E", "B", "C", "C"],
    ["H", "I", "I", "G", "G", "G", "E", "B", "C", "C"],
    ["F", "G", "G", "G", "E", "E", "E", "B", "C", "C"],
    ["F", "G", "G", "G", "E", "F", "F", "B", "C", "C"],
    ["F", "F", "F", "F", "F", "F", "F", "B", "B", "B"],
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
    J: halfBaked,
  },
  solutionsCount: 1213,
  createdBy: "Daniel Zarth",
  creatorLink:
    "https://www.instagram.com/daniel_zarth?igsh=MXRub2lobmN2MzZjbw==",
};

export default level;
