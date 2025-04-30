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

const level146 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "B"],
    ["C", "A", "A", "A", "A", "A", "B", "B"],
    ["C", "C", "D", "A", "A", "A", "E", "B"],
    ["C", "F", "D", "D", "A", "E", "E", "E"],
    ["F", "F", "D", "A", "A", "A", "A", "A"],
    ["A", "F", "A", "A", "G", "A", "A", "H"],
    ["A", "A", "A", "G", "G", "G", "H", "H"],
    ["A", "A", "A", "A", "A", "A", "A", "H"],
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

export default level146;
