import {
  anakiwa,
  canCan,
  coldPurple,
  halfBaked,
  lightOrchid,
  lightWisteria,
} from "../colors";

const level = {
  path: "/community-level/178",
  size: 6,
  colorRegions: [
    ["F", "F", "F", "C", "C", "C"],
    ["F", "F", "F", "C", "D", "D"],
    ["A", "A", "A", "C", "C", "D"],
    ["B", "A", "A", "A", "D", "D"],
    ["B", "E", "E", "E", "D", "D"],
    ["B", "D", "D", "D", "D", "D"],
  ],
  regionColors: {
    A: anakiwa,
    B: canCan,
    C: lightOrchid,
    D: coldPurple,
    E: halfBaked,
    F: lightWisteria,
  },
  solutionsCount: 1,
  createdBy: "Ana",
  creatorLink: "",
};

export default level;
