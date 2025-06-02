import { CommunityLevel } from "../types";
import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level: CommunityLevel = {
  path: "/community-level/11",
  size: 11,
  colorRegions: [
    ["E", "E", "C", "C", "C", "B", "B", "B", "A", "A", "A"],
    ["E", "E", "C", "C", "C", "B", "B", "B", "B", "A", "A"],
    ["E", "E", "C", "C", "C", "C", "B", "B", "B", "D", "A"],
    ["E", "E", "E", "C", "C", "C", "B", "B", "D", "D", "D"],
    ["E", "E", "E", "F", "C", "C", "G", "B", "D", "D", "D"],
    ["E", "E", "F", "F", "F", "F", "G", "G", "H", "D", "D"],
    ["I", "E", "F", "F", "F", "G", "G", "G", "H", "H", "H"],
    ["I", "I", "F", "F", "F", "G", "G", "H", "H", "H", "H"],
    ["I", "I", "I", "F", "J", "J", "G", "H", "H", "H", "H"],
    ["I", "I", "K", "J", "J", "J", "J", "J", "H", "H", "H"],
    ["I", "K", "K", "K", "J", "J", "J", "J", "H", "H", "H"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
    G: saharaSand,
    H: nomad,
    I: lightOrchid,
    J: halfBaked,
    K: turquoiseBlue,
  },
  createdBy: "KoroKira",
  creatorLink: "https://github.com/KoroKira",
};

export default level;
