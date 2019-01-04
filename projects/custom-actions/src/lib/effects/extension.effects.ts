import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, take } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { SHOW_MY_DIALOG, ShowMydDialogAction } from '../actions';
import { appSelection } from '../selectors/app.selectors';
import { UploadFileComponent } from '../dialogs';

@Injectable()
export class ExtensionEffects {

  constructor(
    private store: Store<any>,
    private actions$: Actions,
    private dialog: MatDialog
  ) { }

  @Effect({ dispatch: false })
  showMyDialog$ = this.actions$.pipe(
    ofType<ShowMydDialogAction>(SHOW_MY_DIALOG),
    map(() => {
        this.store
          .select(appSelection)
          .pipe(take(1))
          .subscribe(selection => {
            if (selection && !selection.isEmpty) {
              //Todo: check for upload permission
              this.dialog.open(UploadFileComponent, {
                data: { node: selection.first.entry }
              })
            }
          });
    })
  );


}
