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

const level157 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "A"],
    ["B", "C", "C", "C", "C", "C", "C", "B", "A"],
    ["D", "C", "E", "F", "F", "F", "C", "B", "G"],
    ["D", "C", "E", "H", "H", "F", "C", "B", "G"],
    ["D", "C", "E", "H", "F", "F", "C", "B", "G"],
    ["I", "C", "E", "C", "C", "C", "C", "B", "G"],
    ["I", "B", "B", "B", "B", "B", "B", "B", "G"],
    ["I", "I", "I", "I", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: canCan,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: alto,
    F: carnation,
    G: manz,
    H: tallow,
    I: coldPurple,
  },
};

export default level157;
