import { celadon, nomad } from "../colors";

const level = {
  path: "/community-level/159",
  size: 9,
  colorRegions: [
    ["H", "F", "F", "F", "G", "G", "G", "G", "G"],
    ["H", "F", "F", "D", "D", "G", "G", "G", "G"],
    ["H", "F", "A", "A", "D", "B", "B", "G", "G"],
    ["H", "F", "A", "A", "D", "B", "B", "G", "G"],
    ["F", "F", "F", "F", "C", "G", "G", "G", "E"],
    ["F", "F", "F", "C", "C", "C", "G", "E", "E"],
    ["F", "F", "F", "C", "G", "C", "G", "E", "E"],
    ["I", "I", "G", "G", "G", "G", "G", "E", "E"],
    ["I", "E", "E", "E", "E", "E", "E", "E", "E"],
  ],
  regionColors: {
    A: nomad,
    B: nomad,
    C: nomad,
    D: celadon,
    E: celadon,
    F: celadon,
    G: celadon,
    H: celadon,
    I: celadon,
  },
  solutionsCount: 1,
  createdBy: "CalMye",
  creatorLink: "",
};

export default level;
