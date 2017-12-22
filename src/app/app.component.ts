import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { UserLotto, LottoGame } from './lotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  lottoGames: Observable<LottoGame[]>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.http.get<Observable<LottoGame[]>>('api/LOTTOGAMES')
   .subscribe(data => {
    this.lottoGames = data;
    console.log(data);
   });
  }
}
