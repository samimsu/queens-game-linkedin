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

const level169 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "C", "C", "D", "E"],
    ["A", "F", "F", "B", "B", "B", "C", "D", "E"],
    ["A", "G", "F", "F", "B", "D", "D", "D", "E"],
    ["A", "G", "B", "B", "B", "B", "B", "H", "E"],
    ["A", "G", "G", "G", "B", "H", "H", "H", "E"],
    ["A", "B", "B", "B", "B", "B", "B", "B", "E"],
    ["I", "I", "E", "E", "B", "E", "E", "E", "E"],
    ["I", "I", "E", "B", "B", "B", "E", "E", "E"],
    ["I", "E", "E", "E", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: coldPurple,
    B: canCan,
    C: malibu,
    D: feijoa,
    E: alto,
    F: manz,
    G: carnation,
    H: tallow,
    I: macNCheese,
  },
};

export default level169;
