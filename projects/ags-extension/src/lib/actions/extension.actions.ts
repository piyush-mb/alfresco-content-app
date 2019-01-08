import { Action } from '@ngrx/store';
import { MinimalNodeEntity } from 'alfresco-js-api';

export const SHOW_MY_DIALOG = 'SHOW_MY_DIALOG';

export class ShowMydDialogAction implements Action {
  readonly type = SHOW_MY_DIALOG;
  constructor(public payload?: MinimalNodeEntity) {}
}
