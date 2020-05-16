import { Timer } from '../../types';
import * as actions from '../actions/timer';
export declare type TimerState = Timer | null;
declare const _default: (state: string | null | undefined, action: actions.TimerActions) => TimerState;
export default _default;
