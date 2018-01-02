import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UserLotto, UserLotteryList, WinningLottery, ComparedList, AverageWinnings} from '../lotto';

@Component({
  selector: 'app-lotto-detail',
  templateUrl: './lotto-detail.component.html',
  styleUrls: ['./lotto-detail.component.css']
})
export class LottoDetailComponent implements OnInit {
@Input() lotto: ComparedList;
@Output() removeLotto = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.lotto);
  }

  back2List() {
    this.removeLotto.emit(this.lotto);
  }
}
