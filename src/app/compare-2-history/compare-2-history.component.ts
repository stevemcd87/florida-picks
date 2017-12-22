import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLotto, LottoGame, LottoNumber, UserLotteryList, WinningLottery, CompareLL2WH, AverageWinnings } from '../lotto';
@Component({
  selector: 'app-compare-2-history',
  templateUrl: './compare-2-history.component.html',
  styleUrls: ['./compare-2-history.component.css']
})
export class Compare2HistoryComponent implements OnInit {
  @Input() userLotto: UserLotto;
  lottoList: UserLotteryList[];
  comparedList: CompareLL2WH[];
  averageWinnings: AverageWinnings[];
  winningHistory: WinningLottery[];
  wnHistory: number[][] = [];
  newWinningLottery: FormGroup;
  winningLottery: FormArray;
  quantityMatchedFA: FormControl;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.lottoList = this.userLotto.userLotteryList;
    this.winningHistory = this.userLotto.game.winningHistory;
    this.averageWinnings = this.userLotto.game.averageWinnings;
    console.log(this.userLotto);
  }
}
