import {
    allOtherCellOfARegionAreRemoved,
    noHintsFound,
} from './hints';
import { Board, Hint, Regions } from './interfaces';

type HintFunction = (board: Board, regions: Regions) => Hint;

export default class Engine {
    constructor(private board: Board, private readonly regions: Regions) {}
    
    hints(): Hint {
        const hintStrategies: HintFunction[] = [
            allOtherCellOfARegionAreRemoved,
        ];
        for (const strategy of hintStrategies) {
            const hint = strategy(this.board, this.regions);
            if (hint) {
                return hint;
            }
        }
        return noHintsFound();
    }
}
