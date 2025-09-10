import {
  anakiwa,
  celadon,
  chardonnay,
  halfBaked,
  nomad,
  saharaSand,
  turquoiseBlue,
} from "../colors";

const level = {
  path: "/community-level/249",
  size: 7,
  colorRegions: [
    ["F", "F", "F", "F", "F", "F", "F"],
    ["F", "D", "D", "D", "D", "D", "F"],
    ["F", "D", "A", "B", "B", "D", "F"],
    ["F", "C", "A", "A", "B", "E", "F"],
    ["E", "C", "C", "C", "B", "E", "F"],
    ["E", "E", "E", "E", "E", "E", "F"],
    ["G", "G", "G", "G", "G", "G", "G"],
  ],
  regionColors: {
    A: halfBaked,
    B: celadon,
    C: anakiwa,
    D: turquoiseBlue,
    E: nomad,
    F: saharaSand,
    G: chardonnay,
  },
  solutionsCount: 1,
  createdBy: "Goose",
  creatorLink: "",
};

export default level;
