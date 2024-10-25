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

const level131 = {
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "A", "A", "A", "A", "A", "A", "A"],
    ["C", "C", "B", "B", "A", "D", "A", "A", "A", "E", "A"],
    ["C", "C", "C", "B", "D", "D", "D", "A", "E", "E", "E"],
    ["C", "F", "C", "B", "D", "D", "D", "A", "E", "G", "G"],
    ["C", "F", "C", "B", "D", "H", "D", "A", "E", "G", "E"],
    ["C", "F", "C", "B", "D", "D", "D", "A", "E", "E", "E"],
    ["C", "C", "C", "B", "D", "D", "D", "A", "E", "E", "E"],
    ["C", "C", "B", "B", "I", "D", "J", "A", "J", "E", "K"],
    ["J", "B", "B", "B", "I", "I", "J", "J", "J", "J", "K"],
    ["J", "J", "J", "J", "J", "J", "J", "K", "K", "K", "K"],
  ],
  regionColors: {
    A: canCan,
    B: macNCheese,
    C: halfBaked,
    D: feijoa,
    E: turquoiseBlue,
    F: carnation,
    G: manz,
    H: tallow,
    I: coldPurple,
    J: malibu,
    K: alto,
  },
};

export default level131;
