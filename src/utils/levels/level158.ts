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

const level158 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "C", "A", "A", "A", "D", "D", "B", "B"],
    ["F", "A", "C", "C", "A", "A", "D", "B", "B", "G"],
    ["F", "F", "C", "C", "H", "A", "D", "G", "G", "G"],
    ["E", "F", "F", "C", "H", "H", "H", "G", "G", "G"],
    ["E", "E", "E", "H", "H", "H", "I", "I", "I", "G"],
    ["E", "E", "J", "J", "J", "H", "I", "I", "G", "G"],
    ["E", "E", "J", "G", "G", "G", "I", "G", "G", "G"],
    ["G", "E", "E", "E", "G", "G", "G", "G", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: canCan,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: tallow,
    F: alto,
    G: carnation,
    H: halfBaked,
    I: coldPurple,
    J: manz,
  },
};

export default level158;
