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
  turquoiseBlue,
} from "../colors";

const level150 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "A", "B", "B", "B", "B", "B", "A", "A", "A"],
    ["A", "A", "C", "B", "D", "D", "D", "B", "B", "A", "A"],
    ["A", "C", "C", "D", "D", "E", "D", "D", "B", "B", "A"],
    ["A", "C", "D", "D", "D", "E", "D", "D", "D", "B", "A"],
    ["A", "F", "D", "D", "D", "E", "E", "E", "D", "G", "A"],
    ["A", "F", "D", "D", "D", "D", "D", "D", "D", "G", "A"],
    ["A", "F", "F", "D", "D", "D", "D", "D", "H", "G", "A"],
    ["I", "I", "F", "F", "D", "D", "D", "H", "H", "A", "A"],
    ["I", "I", "I", "F", "J", "J", "J", "J", "A", "A", "A"],
    ["I", "I", "I", "I", "I", "K", "K", "J", "A", "A", "A"],
  ],
  regionColors: {
    A: coldPurple,
    B: halfBaked,
    C: malibu,
    D: canCan,
    E: turquoiseBlue,
    F: carnation,
    G: manz,
    H: tallow,
    I: feijoa,
    J: macNCheese,
    K: alto,
  },
};

export default level150;
