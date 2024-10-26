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

const level152 = {
  size: 10,
  colorRegions: [
    ["A", "A", "B", "B", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "B", "B", "D", "C", "C", "C", "C"],
    ["E", "A", "A", "A", "B", "D", "D", "C", "C", "F"],
    ["E", "E", "A", "A", "A", "D", "C", "C", "F", "F"],
    ["C", "G", "G", "A", "C", "C", "C", "F", "F", "F"],
    ["C", "G", "G", "G", "C", "C", "H", "H", "F", "F"],
    ["C", "C", "G", "C", "C", "H", "H", "H", "F", "F"],
    ["C", "C", "C", "C", "I", "H", "H", "H", "H", "H"],
    ["C", "C", "C", "J", "I", "I", "I", "H", "H", "H"],
    ["C", "C", "J", "J", "J", "I", "I", "H", "H", "H"],
  ],
  regionColors: {
    A: coldPurple,
    B: canCan,
    C: malibu,
    D: feijoa,
    E: alto,
    F: tallow,
    G: manz,
    H: carnation,
    I: macNCheese,
    J: halfBaked,
  },
};

export default level152;
