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

const level140 = {
  size: 10,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["A", "C", "D", "D", "D", "E", "B", "B", "B", "B"],
    ["A", "C", "B", "B", "B", "E", "B", "B", "B", "B"],
    ["A", "C", "B", "B", "B", "F", "F", "F", "G", "B"],
    ["A", "C", "B", "B", "B", "B", "B", "B", "G", "B"],
    ["A", "C", "H", "H", "H", "H", "H", "B", "G", "B"],
    ["A", "A", "A", "A", "A", "A", "I", "B", "G", "B"],
    ["A", "A", "A", "A", "A", "A", "I", "B", "B", "B"],
    ["A", "A", "A", "A", "J", "J", "J", "B", "B", "B"],
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
    I: canCan,
    J: halfBaked,
  },
};

export default level140;
