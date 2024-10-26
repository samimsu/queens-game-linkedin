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

const level156 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "A", "A", "A", "A", "C"],
    ["A", "B", "B", "B", "A", "A", "C", "C"],
    ["A", "A", "B", "A", "A", "D", "C", "D"],
    ["A", "A", "A", "A", "E", "D", "D", "D"],
    ["A", "A", "A", "E", "E", "E", "D", "D"],
    ["A", "A", "F", "E", "G", "D", "D", "D"],
    ["A", "F", "F", "G", "G", "D", "H", "H"],
    ["F", "F", "G", "G", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: coldPurple,
    B: manz,
    C: malibu,
    D: feijoa,
    E: alto,
    F: carnation,
    G: tallow,
    H: macNCheese,
  },
};

export default level156;
