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

const level151 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "C", "C"],
    ["A", "D", "D", "A", "B", "E", "E", "C"],
    ["D", "D", "D", "D", "B", "E", "E", "C"],
    ["D", "D", "D", "D", "D", "D", "C", "C"],
    ["F", "F", "D", "D", "D", "D", "D", "D"],
    ["F", "G", "D", "D", "D", "D", "D", "D"],
    ["F", "G", "D", "D", "H", "D", "D", "H"],
    ["F", "F", "D", "D", "H", "H", "H", "H"],
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

export default level151;
