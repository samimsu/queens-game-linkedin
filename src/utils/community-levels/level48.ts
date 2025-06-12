import {
  bittersweet,
  canCan,
  celadon,
  chardonnay,
  halfBaked,
  lightWisteria,
  malibu,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/48",
  size: 9,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "D", "D", "H"],
    ["A", "A", "A", "B", "D", "D", "D", "D", "H"],
    ["A", "A", "A", "B", "D", "D", "D", "H", "H"],
    ["F", "F", "F", "F", "F", "G", "G", "H", "H"],
    ["F", "F", "F", "G", "G", "G", "G", "G", "C"],
    ["F", "F", "E", "I", "I", "G", "G", "G", "C"],
    ["E", "E", "E", "I", "I", "I", "G", "G", "C"],
    ["E", "E", "E", "I", "I", "I", "G", "G", "C"],
    ["C", "C", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: canCan,
    D: celadon,
    E: malibu,
    F: bittersweet,
    G: saharaSand,
    H: halfBaked,
    I: turquoiseBlue,
  },
  solutionsCount: 898,
  createdBy: "Squeeeksngiggles",
  creatorLink: "",
};

export default level;
