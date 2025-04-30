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

const level154 = {
  size: 8,
  colorRegions: [
    ["A", "A", "B", "B", "B", "C", "C", "C"],
    ["A", "B", "B", "B", "B", "B", "C", "C"],
    ["B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "D", "E", "E", "E", "E", "D", "B"],
    ["B", "D", "E", "E", "F", "F", "D", "G"],
    ["B", "D", "E", "E", "E", "E", "D", "G"],
    ["H", "D", "E", "E", "E", "E", "D", "G"],
    ["H", "D", "D", "D", "D", "D", "D", "G"],
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

export default level154;
