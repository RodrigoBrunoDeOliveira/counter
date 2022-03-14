import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementaContador, IAppState, incrementaContador } from './store/app.state';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public counter$: Observable<number> = this.store.select('app').pipe(map(e => e.counter));

  constructor(
    private store: Store<{ app: IAppState}>
  ) { }

  public decrementa(): void {
    this.store.dispatch(decrementaContador());
  }

  public incrementa(): void {
    this.store.dispatch(incrementaContador());
  }
}