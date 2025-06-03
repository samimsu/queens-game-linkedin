import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/14",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "A", "A", "A"],
    ["A", "C", "C", "C", "C", "A"],
    ["A", "B", "B", "B", "C", "E"],
    ["A", "B", "B", "C", "C", "E"],
    ["A", "D", "B", "B", "C", "E"],
    ["A", "D", "D", "F", "F", "F"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  createdBy: "DocUniverse",
};

export default level;
