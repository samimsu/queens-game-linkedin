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

const level137 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "C", "C", "C", "C", "C", "A"],
    ["B", "C", "D", "D", "D", "D", "D", "C", "A"],
    ["B", "C", "D", "E", "E", "F", "D", "C", "A"],
    ["B", "C", "D", "E", "E", "F", "D", "C", "A"],
    ["B", "C", "G", "F", "F", "F", "H", "I", "A"],
    ["B", "I", "G", "G", "G", "H", "H", "I", "A"],
    ["B", "I", "I", "I", "I", "I", "I", "I", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: alto,
    F: carnation,
    G: manz,
    H: tallow,
    I: canCan,
  },
};

export default level137;
