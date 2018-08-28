const TIMER_UPDATE = 'timer/UPDATE'
const TIMER_CLEAR = 'timer/CLEAR'

const updateTimer = (target) => ({
  type: TIMER_UPDATE,
  payload: {
    target,
  },
})

const clearTimer = () => ({
  type: TIMER_CLEAR,
})

export {
  TIMER_UPDATE,
  TIMER_CLEAR,
  updateTimer,
  clearTimer,
}
