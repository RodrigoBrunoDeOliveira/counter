import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent implements OnInit {

  public contador$: Observable<number> = this.store.select('app').pipe(map(e => e.counter));

  constructor(
    private store: Store<{ app: IAppState}>
  ) { }

  ngOnInit(): void {
  }

}