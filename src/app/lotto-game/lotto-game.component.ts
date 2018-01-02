import {Component, OnInit, Input} from '@angular/core';
import {UserLotto, LottoGame} from '../lotto';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Pick3LogicService} from '../pick3-logic.service';

@Component({
  selector: 'app-lotto-game', 
  templateUrl: './lotto-game.component.html', 
  styleUrls: ['./lotto-game.component.css']})

export class LottoGameComponent implements OnInit {
  @Input()lottoGames : LottoGame[];
  userLotto : UserLotto;
  lottoGame : LottoGame;
  appForm : FormGroup;
  lottoGameControls : FormControl;
  constructor(private fb : FormBuilder, private p3ls : Pick3LogicService) {}

  ngOnInit() {
    // this.createForm();
  }

  createForm() {
    this.appForm = this
      .fb
      .group({
        lotteryGameOptions: this
          .fb
          .control(null, Validators.required)
      });
    this.lottoGameControls = this
      .appForm
      .get('lotteryGameOptions')as FormControl;
    this
      .lottoGameControls
      .valueChanges
      .subscribe(value => {
        this.lottoGame = this.lottoGames[value];
      });
  }

  onLottoGame(index: number): void {
    
    // console.log(index);
    (this.userLotto)
    ? this.userLotto = undefined
    : this.userLotto = {
      game: this.lottoGame
    };
  if (this.userLotto) {
    this.userLotto.userLotteryList = this
      .p3ls
      .genLottos(this.userLotto.game);
  }
  }
  onOffLottoGame(index: number) : void {
    this.lottoGame = this.lottoGames[index];
    (this.userLotto)
      ? this.userLotto = undefined
      : this.userLotto = {
        game: this.lottoGame
      };
    if (this.userLotto) {
      this.userLotto.userLotteryList = this
        .p3ls
        .genLottos(this.userLotto.game);
    }
  }
}
