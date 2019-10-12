import { Timer } from '../../types'

const TIMER_UPDATE = 'timer/UPDATE'
const TIMER_CLEAR = 'timer/CLEAR'

interface TimerUpdateAction {
  type: typeof TIMER_UPDATE
  payload: Timer
}

interface TimerClearAction {
  type: typeof TIMER_CLEAR
}

type TimerActions = TimerUpdateAction | TimerClearAction

const updateTimer = (target: string): TimerActions => ({
  type: TIMER_UPDATE,
  payload: target,
})

const clearTimer = (): TimerActions => ({
  type: TIMER_CLEAR,
})

export { TIMER_UPDATE, TIMER_CLEAR, updateTimer, clearTimer, TimerActions }
