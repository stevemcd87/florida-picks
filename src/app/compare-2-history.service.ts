import {Injectable} from '@angular/core';
import {UserLotto, UserLotteryList, WinningLottery, ComparedList, ComparedWinningLottery, BoxWay} from './lotto';
import {Observable} from 'rxjs/Observable';
import {identifierName} from '@angular/compiler';
// import {setInterval} from 'timers';
@Injectable()
export class Compare2HistoryService {

  constructor() {}

  compare2History(userLotto: UserLotto) : ComparedList[] {
    const lottoList = userLotto.userLotteryList;
    const winningHistory = userLotto.game.winningHistory;
    const averageWinnings = userLotto.game.averageWinnings;
    const straightWinnings = averageWinnings.straight;
    const boxWayArray = averageWinnings.box;
    const comparedList : ComparedList[] = [];
    let moneyWon = 0;
    comparedList.length = 0;
    lottoList.forEach((val, ind, arr) => { // val = .id & .lotto
      const lotto = val.lotto;
      let winningDates : ComparedWinningLottery[] = [];
      let straightNumber = 0; // amount of times lotto won straight
      let boxNumber = 0; // amount of times lotto won box
      let boxWay : string;
      winningDates.length = 0;
      
      winningHistory.forEach((val2, ind2, arr2) => { // val2 = .date, .time, .winningNumber
        const winningNumber = val2.winningNumber;
        const numberDate = string2NumberDate(val2.date);
        if (compareBox(lotto, winningNumber)) {
          boxNumber += 1;
          if (compareStraight(lotto, winningNumber)) {
            straightNumber += 1;
            winningDates.push({date: val2.date, numberDate: numberDate, time: val2.time, winningNumber: winningNumber, straight: true, winnings : straightWinnings});
          } else {
            boxWay = checkSameDiffNumbs(lotto);  
            const boxWinnings = boxWayWinnings(boxWayArray, boxWay).winnings;
            winningDates.push({date: val2.date, numberDate: numberDate, time: val2.time, winningNumber: winningNumber, winnings : boxWinnings});
          }
        }
      }); // End of winningHistory.forEach()
      if (boxNumber > 0) {
        this.orderBy(winningDates, 'numberDate', 'descending');
        moneyWon = totalMoneyWon(winningDates);
        comparedList.push({lottoListID: val.id, lottoNumber: lotto, box: boxNumber, straight: straightNumber, boxWay: boxWay, winningDates: winningDates, moneyWon : moneyWon});
      }
    }); // End of lottoList.forEach()
    return comparedList;

    function boxWayWinnings(boxWayArr: BoxWay[], boxWayString: string) : BoxWay {
      for (let i = 0; i < boxWayArr.length; i += 1) {
        if (boxWayArr[i].boxWay === boxWayString) {
        return boxWayArr[i];
        }
      }
    }

    function totalMoneyWon(winningList: ComparedWinningLottery[]) : number {
      let totalMoneyWon = 0;
      winningList.forEach((val, ind, arr) => {
        totalMoneyWon += val.winnings;
      }); 
      return totalMoneyWon;
    } 

    function compareBox(lotto : number[], winningNumber : number[]) : boolean {
      const lottoLength = lotto.length;
      let boxMatched = false;
      let numbersMatched = 0;
      let newArray = winningNumber.slice();
      lotto.forEach((val, ind) => {
        for (let i = 0; i < newArray.length; i += 1) {
          if (val === newArray[i]) {
            numbersMatched += 1;
            newArray.splice(i, 1);
            i += newArray.length;
          }
        }
        if (numbersMatched === ind) {
          return boxMatched;
        }
      }); // End of lotto.forEach
      if (numbersMatched === lottoLength) {
        boxMatched = true;
      }
      return boxMatched;
    } // End of compareBox

    function string2NumberDate(date : string) : number {
      let arrayDate = date.split("/")
      const dayDate = Number(arrayDate.slice(1, 2));
      const monthDate = Number(arrayDate.slice(0, 1)) - 1;
      const yearDate = Number(arrayDate.slice(2)) + 2000;
      return new Date(yearDate, monthDate, dayDate).getTime();
    } // End of string2NumberDate

    function compareStraight(lotto : number[], winningNumber : number[]) : boolean {
      const lottoLength = lotto.length;
      let numbersMatched = 0;
      lotto.forEach((val, ind) => {
        if (winningNumber[ind] === val) {
          numbersMatched += 1;
        } else {
          return false;
        }
      });
      return (numbersMatched === lottoLength) ? true : false;
    } // End of compareStraight

    function checkSameDiffNumbs(lotto : number[]) : string {
      const newLotto = lotto.slice();
      const lottoLength = lotto.length;
      const checkArray: boolean[] = [];
      let boxWay: string;
      newLotto.sort((a, b) => { return a - b; });
      newLotto.forEach((val, ind, arr) => {
        if (ind !== lottoLength - 1) {
          (val === arr[ind + 1])? checkArray.push(true) : checkArray.push(false);
        }
        switch (lottoLength) {
          case 2:
            boxWay = '2 ways';
              break;
          case 3:
            checkArray.forEach((val) => {
              if (val) {
                boxWay = '3 ways';
              }
            });
            if (!boxWay) {
               boxWay = '6 ways';
            }
            break;
          case 4:
          for (let i = 0; i < checkArray.length; i += 1) {
            if (checkArray[i] === true) {
              if (i !== checkArray.length - 1) {
                if(checkArray[i + 1] === true) {
                  boxWay = '4 ways';
                  i += checkArray.length;
                } else if (i === 0) {
                  if (checkArray[i + 2] === true) {
                    boxWay = '6 ways';
                    i += checkArray.length;
                  }
                }
              } else {
                boxWay = '12 ways';
              }
            }
          }
            if (!boxWay) {
              boxWay = '24 ways';
            }
            break;
        }
      });
      return boxWay;
    } // End of checkSameDiffNumbs
  } // End of compare2History

  orderBy(array : any[], objectKey : string, direction : string) { // largest to smallest
    switch (direction) {
      case 'ascending':
        array.sort((a, b) => {
          return a[`${objectKey}`] - b[`${objectKey}`];
        });
        break;
      case 'descending':
        array.sort((a, b) => {
          return b[`${objectKey}`] - a[`${objectKey}`];
        });
        break;
    }
  }

}