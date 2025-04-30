import {
  altoMain,
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level99 = {
  size: 7,
  colorRegions: [
    ["A", "B", "C", "C", "D", "D", "D"],
    ["B", "B", "B", "C", "D", "E", "D"],
    ["C", "B", "C", "C", "D", "E", "D"],
    ["C", "C", "C", "F", "F", "E", "D"],
    ["G", "G", "G", "F", "E", "E", "D"],
    ["G", "E", "E", "E", "E", "G", "G"],
    ["G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: lightOrchid,
    G: halfBaked,
  },
};

export default level99;
