import {
  alto,
  anakiwa,
  bittersweet,
  celadon,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  tallow,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/7",
  size: 11,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A", "B", "B", "B", "C", "C"],
    ["D", "A", "A", "A", "A", "B", "B", "B", "B", "C", "C"],
    ["D", "E", "E", "E", "A", "B", "B", "B", "C", "C", "C"],
    ["D", "E", "E", "E", "E", "F", "B", "B", "C", "C", "C"],
    ["D", "D", "E", "E", "F", "F", "F", "F", "C", "C", "C"],
    ["D", "D", "I", "E", "F", "F", "F", "F", "C", "C", "G"],
    ["D", "I", "I", "I", "I", "F", "F", "K", "G", "G", "G"],
    ["D", "I", "I", "I", "I", "F", "K", "K", "G", "G", "G"],
    ["J", "J", "I", "I", "K", "K", "K", "K", "K", "G", "G"],
    ["J", "J", "J", "J", "J", "K", "K", "K", "H", "H", "G"],
    ["J", "J", "J", "J", "J", "H", "H", "H", "H", "H", "H"],
  ],
  regionColors: {
    A: alto,
    B: lightWisteria,
    C: anakiwa,
    D: celadon,
    E: tallow,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  },
  createdBy: "bigbert619",
};

export default level;
