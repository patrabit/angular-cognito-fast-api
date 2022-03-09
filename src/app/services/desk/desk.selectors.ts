import {createSelector} from '@ngrx/store';
import {selectDeskState} from '$app/app.state';
import {DeskState} from './desk.models';

export const selectDesk= createSelector(
  selectDeskState,
  (state: DeskState) => state
);

export const selectDevices = createSelector(
  selectDeskState,
  (state: DeskState) => state.devices
);