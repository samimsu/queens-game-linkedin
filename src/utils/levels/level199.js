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

const level199 = {
  size: 9,
  colorRegions: [
    ["A", "B", "B", "B", "B", "B", "C", "C", "C"],
    ["A", "A", "D", "D", "D", "B", "E", "E", "C"],
    ["A", "D", "D", "D", "D", "F", "E", "E", "C"],
    ["A", "D", "D", "D", "F", "F", "F", "C", "C"],
    ["A", "D", "D", "G", "G", "F", "C", "C", "C"],
    ["D", "D", "H", "G", "G", "C", "C", "C", "C"],
    ["D", "H", "H", "H", "C", "C", "C", "C", "C"],
    ["I", "I", "H", "C", "C", "C", "C", "C", "C"],
    ["I", "I", "C", "C", "C", "C", "C", "C", "C"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: canCan,
    D: carnation,
    E: alto,
    F: feijoa,
    G: manz,
    H: tallow,
    I: malibu,
  },
};

export default level199;
