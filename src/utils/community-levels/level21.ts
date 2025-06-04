import {
  altoMain,
  anakiwa,
  bittersweet,
  celadon,
  chardonnay,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/21",
  size: 6,
  colorRegions: [
    ["A", "A", "A", "A", "B", "B"],
    ["A", "D", "D", "B", "B", "B"],
    ["C", "C", "C", "B", "B", "B"],
    ["A", "E", "E", "E", "E", "E"],
    ["A", "F", "F", "F", "F", "E"],
    ["A", "A", "F", "E", "E", "E"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: celadon,
    E: altoMain,
    F: bittersweet,
  },
  createdBy: "Evdav01",
};

export default level;
