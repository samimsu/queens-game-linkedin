import {
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
} from "../colors";

const level = {
  path: "/community-level/201",
  size: 10,
  colorRegions: [
    ["E", "E", "E", "E", "B", "B", "B", "A", "A", "A"],
    ["B", "B", "B", "B", "B", "D", "A", "A", "A", "J"],
    ["D", "D", "D", "D", "B", "D", "A", "A", "J", "J"],
    ["C", "C", "C", "D", "D", "D", "A", "A", "A", "J"],
    ["C", "I", "C", "C", "D", "A", "A", "F", "J", "J"],
    ["I", "I", "I", "F", "F", "F", "A", "F", "F", "J"],
    ["I", "G", "I", "F", "H", "F", "F", "F", "J", "J"],
    ["I", "G", "I", "H", "H", "H", "F", "J", "J", "J"],
    ["G", "G", "H", "H", "J", "H", "H", "J", "J", "J"],
    ["G", "J", "J", "J", "J", "J", "J", "J", "J", "J"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: lavenderRose,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "airen",
  creatorLink: "",
};

export default level;
