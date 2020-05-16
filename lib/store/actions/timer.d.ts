import { Timer } from '../../types';
export declare const TIMER_UPDATE = "timer/UPDATE";
export declare const TIMER_CLEAR = "timer/CLEAR";
export interface TimerUpdateAction {
    type: typeof TIMER_UPDATE;
    payload: Timer;
}
export interface TimerClearAction {
    type: typeof TIMER_CLEAR;
}
export declare type TimerActions = TimerUpdateAction | TimerClearAction;
export declare const updateTimerAction: (target: string) => TimerActions;
export declare const clearTimerAction: () => TimerActions;
