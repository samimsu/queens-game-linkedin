import {
    altoMain,
    anakiwa,
    bittersweet,
    celadon,
    chardonnay,
    lightOrchid,
    lightWisteria,
    nomad,
    saharaSand,
} from "../colors";

const level421 = {
    size: 9,
    colorRegions: [
        ["F", "B", "B", "C", "I", "I", "I", "I", "I"],
        ["F", "B", "C", "C", "C", "I", "I", "I", "I"],
        ["F", "D", "A", "A", "C", "I", "I", "D", "I"],
        ["F", "D", "D", "A", "A", "G", "D", "D", "I"],
        ["F", "F", "D", "D", "A", "D", "D", "I", "I"],
        ["F", "F", "F", "D", "D", "D", "H", "E", "I"],
        ["F", "F", "F", "F", "D", "H", "H", "E", "I"],
        ["F", "F", "F", "F", "D", "H", "E", "E", "I"],
        ["F", "F", "D", "D", "D", "D", "D", "I", "I"],
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
    },
    isNew: true,
};

export default level421;
