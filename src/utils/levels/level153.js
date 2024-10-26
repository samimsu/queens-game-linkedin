import {
  alto,
  carnation,
  coldPurple,
  feijoa,
  macNCheese,
  malibu,
  manz,
  tallow,
} from "../colors";

const level153 = {
  size: 8,
  colorRegions: [
    ["A", "A", "A", "A", "A", "B", "B", "B"],
    ["A", "B", "B", "B", "A", "B", "C", "B"],
    ["B", "B", "D", "B", "A", "B", "C", "B"],
    ["E", "E", "B", "B", "A", "B", "C", "B"],
    ["B", "B", "B", "F", "B", "B", "C", "B"],
    ["B", "G", "G", "B", "B", "C", "C", "B"],
    ["B", "B", "B", "B", "C", "C", "B", "B"],
    ["B", "B", "B", "C", "C", "B", "B", "H"],
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
  },
};

export default level153;
