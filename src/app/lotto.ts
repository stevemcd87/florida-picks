// import {UserLotto, LottoGame} from '../lotto'; import {UserLotto,
// UserLotteryList, WinningLottery, ComparedList, AverageWinnings} from
// '../lotto';

export class UserLotto {
    game : LottoGame;
    winningLottery?: ComparedWinningLottery;
    userLotteryList?: UserLotteryList[];
    comparedList?: ComparedList[];
}
export class LottoGame {
    name : string;
    valueName?: string;
    lotteryLength : number;
    maxNumber : number;
    averageWinnings?: AverageWinnings;
    winningHistory?: WinningLottery[];
}
export class WinningLottery {
    date?: string;
    time?: string;
    winningNumber?: number[];
}
export class ComparedWinningLottery {
    date?: string;
    numberDate?: number;
    time?: string;
    winningNumber?: number[];
    straight?: boolean;
    boxWay?: string;
    winnings?: number;
}
export class UserLotteryList {
    id : number;
    lotto : number[];
    
}
export class AverageWinnings {
    straight : number;
    box : BoxWay[];
}
export class ComparedList {
    lottoListID : number;
    lottoNumber : number[];
    straight?: number;
    box?: number;
    boxWay?: string;
    winningDates?: ComparedWinningLottery[];
    moneyWon?: number;
}
export class BoxWay {
    boxWay : string;
    winnings: number;
}