import {
  alto,
  canCan,
  carnation,
  coldPurple,
  feijoa,
  halfBaked,
  macNCheese,
  malibu,
  manz,
  tallow,
} from "../colors";

const level159 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "B", "B", "B", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "B", "B", "A", "C", "C", "C"],
    ["A", "A", "A", "A", "A", "A", "A", "C", "D", "C"],
    ["A", "A", "A", "E", "E", "E", "F", "C", "D", "A"],
    ["A", "G", "G", "G", "H", "E", "F", "D", "D", "A"],
    ["A", "A", "I", "G", "H", "F", "F", "D", "D", "A"],
    ["A", "A", "I", "H", "H", "F", "F", "A", "A", "A"],
    ["A", "I", "I", "H", "H", "A", "A", "A", "J", "A"],
    ["A", "I", "I", "A", "A", "A", "J", "J", "J", "A"],
    ["A", "A", "A", "A", "A", "A", "A", "A", "J", "A"],
  ],
  regionColors: {
    A: carnation,
    B: macNCheese,
    C: halfBaked,
    D: feijoa,
    E: alto,
    F: coldPurple,
    G: manz,
    H: tallow,
    I: canCan,
    J: malibu,
  },
};

export default level159;
