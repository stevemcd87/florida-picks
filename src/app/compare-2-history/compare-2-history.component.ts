import {Component, OnInit, Input} from '@angular/core'
import {FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms'

import {CustomValidators} from '../custom-validators'
import {UserLotto, UserLotteryList, WinningLottery, ComparedList, AverageWinnings} from '../lotto';
import {Compare2HistoryService} from '../compare-2-history.service';

@Component({selector: 'app-compare-2-history', templateUrl: './compare-2-history.component.html', styleUrls: ['./compare-2-history.component.css']})

export class Compare2HistoryComponent implements OnInit {
  @Input()userLotto : UserLotto;
  lottoList : UserLotteryList[];
  comparedList : ComparedList[];
  averageWinnings : AverageWinnings;
  winningHistory : WinningLottery[];
  foundLotto : ComparedList;
  selectedLotto : ComparedList;

  orderByForm : FormGroup;
  orderByControls : FormControl;
  directionControls : FormControl;
  searchLottoControls : FormGroup;
  lottoNumbersControls : FormArray;
  constructor(private fb : FormBuilder, private compare2HistoryService : Compare2HistoryService) {}

  ngOnInit() {
    this.lottoList = this.userLotto.userLotteryList;
    this.winningHistory = this.userLotto.game.winningHistory;
    this.averageWinnings = this.userLotto.game.averageWinnings;
    console.time('compare2HistoryService');
    this.comparedList = this.compare2HistoryService.compare2History(this.userLotto);
    console.timeEnd('compare2HistoryService');
    this.createForm();
    this.userLotto.comparedList = this.comparedList;
    console.log(this.userLotto);
  }

  createForm() {
    this.orderByForm = this.fb.group({
        orderByOptions: this.fb.control('box'),
        direction: this.fb.control('descending'),
        searchLotto: this.fb.group({
          lottoNumbers: this.fb.array([
            this.fb.control(null)
          ])
        }, {validator : CustomValidators.incompleteLotto()})
      });
    this.orderByControls = this.orderByForm.get('orderByOptions')as FormControl;
    this.directionControls = this.orderByForm.get('direction')as FormControl;
    this.searchLottoControls = this.orderByForm.get('searchLotto') as FormGroup;
    this.lottoNumbersControls = this.searchLottoControls.get('lottoNumbers') as FormArray;
    this.orderByForm.valueChanges.subscribe(value => {
      this.compare2HistoryService.orderBy(this.comparedList, value.orderByOptions, value.direction)
    })
    this.compare2HistoryService.orderBy(this.comparedList, this.orderByControls.value, this.directionControls.value)
    this.searchLottoControls.valueChanges.subscribe(value => {
      if (this.searchLottoControls.valid === true) {
        const lottoNumbers = value.lottoNumbers;
        this.foundLotto = this.findLotto(this.comparedList, lottoNumbers);
        console.log(this.foundLotto);
      }
    })
    this.addFormArray2LottoLength();
  } // End of createForm()

  onSelect(lotto : ComparedList): void {
    this.selectedLotto = lotto;
  }

  unselectLotto(): void {
    this.selectedLotto = undefined
  }
  addFormArray2LottoLength(): void {
    const lottoLength = this.userLotto.game.lotteryLength;
    for (let i = 0; i < lottoLength - 1; i += 1) {
      this.lottoNumbersControls.push(this.fb.control(null));
    }
  } // addFormArray2LottoLength()

  findLotto(comparedList: ComparedList[], lottoNumbers: number[]): ComparedList {
    let foundLotto: ComparedList;
    comparedList.forEach((val, ind, arr) => {
      const compLotto = val.lottoNumber;
      if (compareStraight(compLotto, lottoNumbers)) {
        foundLotto = val;
      } 
    })
    return foundLotto;
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
  } // End of FindLotto
}