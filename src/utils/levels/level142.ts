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

const level142 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "C", "C", "C", "C", "D", "A"],
    ["A", "C", "C", "C", "C", "C", "C", "D", "A"],
    ["A", "E", "F", "G", "G", "G", "G", "D", "A"],
    ["A", "E", "F", "H", "G", "H", "G", "H", "A"],
    ["A", "E", "F", "H", "H", "H", "H", "H", "A"],
    ["A", "E", "F", "H", "H", "H", "H", "H", "A"],
    ["F", "E", "F", "H", "I", "I", "I", "I", "H"],
    ["F", "F", "F", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: alto,
    F: carnation,
    G: manz,
    H: canCan,
    I: tallow,
  },
};

export default level142;
