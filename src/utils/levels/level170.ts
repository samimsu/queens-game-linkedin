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

const level170 = {
  size: 8,
  colorRegions: [
    ["A", "B", "B", "B", "C", "D", "D", "D"],
    ["A", "A", "A", "B", "C", "C", "C", "D"],
    ["A", "B", "B", "B", "C", "D", "D", "D"],
    ["B", "B", "E", "B", "B", "D", "F", "F"],
    ["G", "G", "E", "B", "H", "D", "D", "F"],
    ["G", "E", "E", "E", "H", "H", "H", "F"],
    ["G", "F", "F", "F", "H", "F", "F", "F"],
    ["F", "F", "F", "F", "F", "F", "F", "F"],
  ],
  regionColors: {
    A: malibu,
    B: manz,
    C: tallow,
    D: alto,
    E: coldPurple,
    F: carnation,
    G: feijoa,
    H: macNCheese,
  },
};

export default level170;
