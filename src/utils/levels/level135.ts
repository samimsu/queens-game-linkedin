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

const level135 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "C", "C"],
    ["A", "D", "A", "D", "B", "C", "C", "C"],
    ["A", "D", "D", "D", "B", "E", "E", "E"],
    ["A", "D", "D", "D", "B", "F", "F", "F"],
    ["A", "A", "D", "B", "B", "F", "D", "F"],
    ["A", "A", "D", "D", "D", "D", "D", "F"],
    ["A", "G", "D", "D", "D", "D", "D", "F"],
    ["G", "G", "D", "H", "H", "H", "D", "F"],
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

export default level135;
