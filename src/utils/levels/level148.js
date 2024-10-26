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

const level148 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "C", "C", "D", "D", "E", "E", "A"],
    ["B", "C", "C", "D", "D", "E", "E", "A"],
    ["B", "B", "D", "D", "D", "D", "A", "A"],
    ["F", "B", "G", "G", "G", "G", "A", "A"],
    ["F", "G", "G", "F", "F", "G", "G", "A"],
    ["F", "G", "F", "F", "H", "H", "G", "A"],
    ["F", "F", "F", "F", "F", "H", "H", "A"],
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

export default level148;
