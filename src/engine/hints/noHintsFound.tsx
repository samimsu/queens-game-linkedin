import { Hint } from "../interfaces";
import { getI18n } from "react-i18next";

const noHintsFound = (): Hint => {
    const i18n = getI18n();
    return {
        highlightedCells: [],
        crossedCells: [],
        message: i18n.t('HINTS.NO_HITS_FOUND'),
    };
};

export default noHintsFound;