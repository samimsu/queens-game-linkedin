import { anakiwa, halfBaked } from "../colors";

const level = {
  path: "/community-level/335",
  size: 7,
  colorRegions: [
    ["A", "G", "G", "G", "B", "B", "B"],
    ["A", "G", "E", "G", "G", "G", "B"],
    ["A", "G", "E", "C", "D", "D", "B"],
    ["A", "G", "E", "C", "C", "D", "B"],
    ["A", "G", "D", "D", "D", "D", "B"],
    ["A", "F", "F", "F", "F", "F", "B"],
    ["A", "A", "A", "A", "A", "A", "A"],
  ],
  regionColors: {
    A: halfBaked,
    B: anakiwa,
    C: anakiwa,
    D: halfBaked,
    E: halfBaked,
    F: anakiwa,
    G: anakiwa,
  },
  solutionsCount: 1,
  createdBy: "supalonely",
  creatorLink: "",
};

export default level;
