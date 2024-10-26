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

const level143 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "C", "C", "C"],
    ["A", "A", "A", "D", "B", "B", "B", "C", "C"],
    ["A", "A", "D", "D", "D", "B", "E", "C", "C"],
    ["A", "A", "A", "D", "F", "E", "E", "E", "C"],
    ["A", "A", "G", "F", "F", "F", "E", "H", "C"],
    ["A", "G", "G", "G", "F", "I", "H", "H", "H"],
    ["A", "A", "G", "A", "I", "I", "I", "H", "A"],
    ["A", "A", "A", "A", "A", "I", "A", "A", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: carnation,
    F: canCan,
    G: manz,
    H: tallow,
    I: alto,
  },
};

export default level143;
