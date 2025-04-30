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

const level144 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "A", "C", "A", "A", "A"],
    ["A", "D", "B", "E", "E", "E", "C", "C", "C", "C"],
    ["A", "D", "B", "B", "B", "E", "C", "C", "C", "C"],
    ["A", "D", "B", "E", "E", "E", "F", "F", "F", "C"],
    ["A", "D", "B", "B", "B", "E", "F", "G", "G", "G"],
    ["D", "D", "D", "E", "E", "E", "F", "F", "F", "G"],
    ["D", "H", "D", "H", "I", "H", "F", "G", "G", "G"],
    ["D", "H", "D", "H", "I", "H", "F", "F", "F", "G"],
    ["D", "H", "H", "H", "H", "H", "J", "G", "G", "G"],
  ],
  regionColors: {
    A: malibu,
    B: carnation,
    C: coldPurple,
    D: feijoa,
    E: halfBaked,
    F: macNCheese,
    G: manz,
    H: tallow,
    I: canCan,
    J: alto,
  },
};

export default level144;
