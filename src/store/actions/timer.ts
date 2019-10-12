import { Timer } from '../../types'

export const TIMER_UPDATE = 'timer/UPDATE'
export const TIMER_CLEAR = 'timer/CLEAR'

export interface TimerUpdateAction {
  type: typeof TIMER_UPDATE
  payload: Timer
}

export interface TimerClearAction {
  type: typeof TIMER_CLEAR
}

export type TimerActions = TimerUpdateAction | TimerClearAction

export const updateTimerAction = (target: string): TimerActions => ({
  type: TIMER_UPDATE,
  payload: target,
})

export const clearTimerAction = (): TimerActions => ({
  type: TIMER_CLEAR,
})
