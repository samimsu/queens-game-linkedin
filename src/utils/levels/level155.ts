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

const level155 = {
  size: 9,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B", "B", "B", "B"],
    ["A", "A", "C", "A", "B", "D", "D", "B", "B"],
    ["A", "C", "C", "E", "B", "D", "B", "B", "B"],
    ["A", "C", "E", "E", "B", "D", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "B", "B", "B", "B"],
    ["B", "B", "B", "B", "B", "F", "F", "F", "F"],
    ["B", "B", "G", "B", "B", "F", "H", "H", "F"],
    ["B", "G", "G", "G", "B", "F", "H", "I", "F"],
    ["B", "B", "G", "B", "B", "I", "I", "I", "F"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: malibu,
    D: canCan,
    E: alto,
    F: feijoa,
    G: carnation,
    H: tallow,
    I: manz,
  },
};

export default level155;
