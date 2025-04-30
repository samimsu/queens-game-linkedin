import {
  alto,
  carnation,
  coldPurple,
  feijoa,
  macNCheese,
  malibu,
  manz,
} from "../colors";

const level132 = {
  size: 7,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "A"],
    ["A", "A", "B", "A", "C", "C", "A"],
    ["A", "B", "B", "D", "D", "C", "C"],
    ["A", "B", "E", "E", "D", "D", "C"],
    ["A", "A", "A", "E", "E", "C", "C"],
    ["A", "A", "F", "F", "G", "G", "C"],
    ["A", "A", "A", "F", "F", "G", "G"],
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

export default level132;
