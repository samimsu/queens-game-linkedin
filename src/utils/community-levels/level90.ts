import {
  alto,
  anakiwa,
  bittersweet,
  celadon,
  halfBaked,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/90",
  size: 6,
  colorRegions: [
    ["F", "E", "E", "E", "E", "F"],
    ["D", "D", "F", "F", "D", "D"],
    ["C", "D", "D", "D", "D", "D"],
    ["C", "C", "C", "C", "C", "B"],
    ["A", "A", "B", "B", "B", "B"],
    ["A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: lightWisteria,
    B: alto,
    C: anakiwa,
    D: celadon,
    E: halfBaked,
    F: bittersweet,
  },
  solutionsCount: 5,
  createdBy: "Tarushi",
  creatorLink: "https://www.instagram.com/tarushiii_/",
};

export default level;
