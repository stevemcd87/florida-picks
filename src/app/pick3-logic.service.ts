import { Injectable } from '@angular/core';
import { UserLotto, LottoGame, LottoNumber, UserLotteryList, MinMax } from './lotto';
// import { start } from 'repl';
// import { stagger } from '@angular/core/src/animation/dsl';

@Injectable()
export class Pick3LogicService {

  constructor() { }
  genLottos(lottoGame: LottoGame) {
    const lotteryList: UserLotteryList[] = [];
    const ll2: UserLotteryList[] = [];
    let id = 0;
    const lotteryLength = lottoGame.lotteryLength;
    const maxNumber = lottoGame.maxNumber;
    const startLottery: number[] = [];
    let currentLotto: number[];
    for (let i = lotteryLength; i > 0; i -= 1) { // Creating the first lottery 0,0,0
      startLottery.push(0);
    }
    pushLottoList(startLottery, lotteryList); // Pushing firsy lottery
    currentLotto = startLottery.slice();
  currentLotto.forEach((val, ind, arr) => {
    if (ind === 0) {
      maxOutFirstIndex(currentLotto);
    } else {
      maxOutIndexs(ind, arr);
    }

  });

function maxOutIndexs (index: number, array: number[]) {
  const lotto = array.slice();
  const lastIndex = index - 1;
  while (lotto[index] <= maxNumber) {
      lotto[index] += 1;
    pushLottoList(lotto, lotteryList);
    console.log(index);
    if (index === 1) {
      maxOutFirstIndex(lotto);

    }
    if (index > 1) {
      maxOutFirstIndex(lotto);
      for (let i = 1; i < index; i += 1) {
        maxOutIndexs(i, lotto);
      }
    }
  }
}


    function pushLotto (lotto) {
      const newLotto = lotto.slice();
      lotteryList.push({id : id, lotto : newLotto});
    }
    function splicePrevNumbers(lotto: number[], index: number): number[] {
      const range: number[] = [];
      for (let i = 0; i < index; i += 1) {
        range.push(0);
      }
      console.log(range);
      lotto.splice(0, index, ...range);
      return lotto;
    }
    
    function maxOutFirstIndex(lotto) {
      while (lotto[0] <= maxNumber) {
        lotto = createNextLotto(lotto, 0);
        if (lotto[0] <= maxNumber) {
          pushLottoList(lotto, lotteryList);
        }
      }
    }
    
    function createNextLotto(lotto: number[], index: number): number[] {
      const nextLotto = lotto.slice();
      nextLotto[index] += 1;
      return nextLotto;
    }
    function pushLottoList(lotto: number[], lottoList: UserLotteryList[]) {
      const newLotto = lotto.slice() ;
      let valid: number;
      valid = newLotto.find(checkValid);
      function checkValid(value) {
        return value > maxNumber;
      }
      if (valid === undefined) {
       id += 1;
       lottoList.push({id: id, lotto: newLotto });
      }
    }
    console.log(lottoGame);
    console.log(lotteryList);
    return lotteryList;
  }// End of GenLottos
 
    }
