import {Action, createReducer, on} from '@ngrx/store';
import {addDevice} from './desk.actions'
import {DeskState} from './desk.models';

export const deskFeatureKey = 'desk';

export const initialState: DeskState = {
    devices: [
        {
            name: "mixer",
        }
    ],
}
const reducer = createReducer(
    initialState,
    on(addDevice, (state, action) => ({...state, devices: [...state.devices]})),
)
    
export function deskReducer(
state: DeskState | undefined,
action: Action
): DeskState {
    return reducer(state, action);
}
