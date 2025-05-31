import {
  anakiwa,
  coldPurple,
  feijoa,
  lavenderRose,
  lightOrchid,
  macNCheese,
  manz,
  nomad,
  turquoiseBlue,
} from "../colors";

const leveljojo = {
  path: "/community-level/2",
  size: 9,
  colorRegions: [
    ["C", "C", "C", "C", "C", "C", "C", "C", "C"],
    ["A", "A", "A", "E", "E", "H", "H", "H", "C"],
    ["B", "B", "A", "E", "H", "H", "H", "F", "C"],
    ["B", "A", "A", "E", "E", "F", "F", "F", "C"],
    ["A", "A", "I", "I", "E", "I", "I", "F", "C"],
    ["D", "I", "I", "I", "I", "I", "I", "F", "C"],
    ["D", "I", "I", "G", "I", "G", "I", "F", "C"],
    ["D", "I", "I", "G", "G", "G", "I", "F", "C"],
    ["D", "D", "I", "I", "I", "I", "I", "F", "C"],
  ],
  regionColors: {
    A: feijoa,
    B: turquoiseBlue,
    C: anakiwa,
    D: coldPurple,
    E: lavenderRose,
    F: manz,
    G: macNCheese,
    H: nomad,
    I: lightOrchid,
  },
  createdBy: "joananana",
  creatorLink: "https://github.com/joananana",
};

export default leveljojo;
