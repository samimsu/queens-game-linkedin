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

const level134 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "B", "B", "B", "C", "C", "C", "C", "C", "D"],
    ["A", "E", "F", "F", "F", "G", "G", "G", "C", "D"],
    ["A", "E", "F", "F", "F", "F", "G", "G", "H", "D"],
    ["A", "E", "I", "F", "F", "J", "G", "J", "H", "D"],
    ["A", "E", "I", "F", "I", "J", "J", "J", "H", "D"],
    ["A", "E", "I", "I", "I", "I", "J", "J", "H", "D"],
    ["A", "E", "I", "I", "I", "I", "J", "J", "H", "D"],
    ["A", "E", "E", "E", "E", "E", "E", "H", "H", "D"],
    ["A", "A", "A", "A", "A", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: alto,
    F: halfBaked,
    G: manz,
    H: tallow,
    I: canCan,
    J: carnation,
  },
};

export default level134;
