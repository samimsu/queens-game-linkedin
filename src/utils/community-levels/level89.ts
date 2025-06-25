import {
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lavenderRose,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/89",
  size: 10,
  colorRegions: [
    ["J", "I", "I", "I", "E", "E", "E", "G", "G", "G"],
    ["J", "J", "I", "I", "I", "E", "E", "E", "E", "G"],
    ["H", "J", "J", "I", "I", "I", "E", "E", "E", "D"],
    ["H", "B", "J", "J", "I", "I", "E", "E", "D", "D"],
    ["H", "B", "B", "J", "J", "I", "E", "D", "D", "D"],
    ["H", "H", "B", "B", "J", "J", "A", "A", "A", "A"],
    ["F", "C", "B", "B", "B", "J", "J", "A", "A", "A"],
    ["F", "C", "C", "B", "B", "B", "J", "J", "A", "A"],
    ["F", "C", "C", "C", "B", "B", "B", "J", "J", "A"],
    ["F", "F", "C", "C", "C", "C", "B", "B", "J", "J"],
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
    J: turquoiseBlue,
  },
  solutionsCount: 781,
  createdBy: "Sravan",
  creatorLink: "https://www.instagram.com/sravandeepk?igsh=YXVxYnBrNXY4MTEx",
};

export default level;
