export class UserLotto {
    game: LottoGame;
    option?: LottoOption;
    winningLottery?: WinningLottery;
    userLotteryList?: UserLotteryList[];
    comparedULL2WL?: ComparedULL2WL;
}
export class LottoGame {
    name: string;
    lotteryLength: number;
    maxNumber: number;
    logic: LottoLogic;
    averageWinnings?: AverageWinnings[];
    options?: LottoOption[];
    moneyBall?: number;
    winningHistory?: WinningLottery[];
}
export enum LottoLogic {
    Pick3 = 1,
    FloridaLotto,
    Powerball
}
export class LottoOption {
    name?: string;
    lottoNumbers: LottoNumber[];
}
export class LottoNumber {
    startNumber: number;
    increment:   number;
    endNumber:   number;
}
export class  LNInfo {
    value: number;
    min?: MinMax;
    max?: MinMax;
}

 export class MinMax {
    value?: number;
    rules: string[];
}
export class ComparedULL2WL {
    winningNumber: WinningLottery;
    matched: Matched[];
}
export class WinningLottery {
    date?: string;
    time?: string;
    winningNumber: number[];
    x?: number;
    numbersMatched?: number;
}
export class UserLotteryList {
    id: number;
    lotto: number[];
}
export class Matched {
    matchedNumbers: number;
    userLotto: UserLotteryList[];
}
export class CompareLL2WH {
    userLotto: UserLotteryList;
    numbersMatched: Matched2[];
    totalMoneyWon?: number;
}
export class Matched2 {
    numberMatched: number;
    quantNumberMatched: number;
    topWinners?: WinningLottery[];
    moneyWon?: number;
}
export class AverageWinnings {
    numberMatched: number;
    moneyWon: number;
}
