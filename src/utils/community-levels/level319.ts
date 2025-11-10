import {
  anakiwa,
  chardonnay,
  halfBaked,
  lightOrchid,
  lightWisteria,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/319",
  size: 7,
  colorRegions: [
    ["D", "D", "D", "D", "D", "E", "G"],
    ["D", "C", "D", "D", "D", "E", "G"],
    ["C", "C", "D", "D", "D", "E", "G"],
    ["C", "C", "B", "E", "E", "E", "G"],
    ["C", "C", "C", "E", "E", "E", "G"],
    ["C", "C", "C", "E", "F", "F", "G"],
    ["A", "C", "C", "E", "E", "E", "G"],
  ],
  regionColors: {
    A: lightWisteria,
    B: chardonnay,
    C: anakiwa,
    D: saharaSand,
    E: lightOrchid,
    F: turquoiseBlue,
    G: halfBaked,
  },
  solutionsCount: 1,
  createdBy: "GeePea",
  creatorLink: "",
};

export default level;
