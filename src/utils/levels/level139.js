import {
  alto,
  carnation,
  coldPurple,
  feijoa,
  macNCheese,
  malibu,
  manz,
} from "../colors";

const level139 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B"],
    ["A", "A", "A", "A", "A", "B", "B"],
    ["A", "C", "C", "C", "C", "C", "B"],
    ["A", "C", "D", "D", "D", "C", "E"],
    ["A", "C", "C", "C", "C", "C", "E"],
    ["A", "A", "A", "F", "G", "E", "E"],
    ["A", "A", "F", "F", "G", "G", "G"],
  ],
  regionColors: {
    A: coldPurple,
    B: macNCheese,
    C: malibu,
    D: feijoa,
    E: alto,
    F: carnation,
    G: manz,
  },
};

export default level139;
