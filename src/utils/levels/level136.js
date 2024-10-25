import {
  alto,
  carnation,
  coldPurple,
  feijoa,
  macNCheese,
  malibu,
  manz,
  tallow,
} from "../colors";

const level136 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "D", "B", "B", "A"],
    ["A", "C", "C", "C", "E", "E", "B", "A"],
    ["A", "A", "F", "C", "E", "F", "A", "A"],
    ["A", "G", "F", "F", "E", "F", "H", "A"],
    ["A", "G", "F", "F", "F", "F", "H", "A"],
    ["A", "G", "G", "G", "G", "H", "H", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A"],
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
  },
};

export default level136;
