import {
  alto,
  canCan,
  carnation,
  coldPurple,
  feijoa,
  macNCheese,
  malibu,
  manz,
  tallow,
} from "../colors";

const level145 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "C", "C", "B"],
    ["C", "C", "D", "C", "D", "C", "D", "C", "C"],
    ["C", "D", "D", "D", "D", "D", "D", "D", "E"],
    ["C", "C", "F", "D", "G", "G", "H", "E", "E"],
    ["C", "F", "F", "G", "G", "H", "H", "H", "E"],
    ["C", "C", "F", "I", "G", "I", "H", "I", "E"],
    ["I", "C", "C", "I", "I", "I", "I", "I", "I"],
    ["I", "I", "I", "I", "I", "I", "I", "I", "I"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: alto,
    F: tallow,
    G: manz,
    H: carnation,
    I: canCan,
  },
};

export default level145;
