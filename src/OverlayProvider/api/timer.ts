import { createReplicant } from 'nodecg-twitchie'

import { Dispatch } from 'redux'
import { Timer } from '../../types'
import { clearTimer, updateTimer } from '../actions/timer'

export default (dispatch: Dispatch) => {
  const timer = createReplicant<Timer>(nodecg, 'brb', {
    persistent: true,
  })

  timer.on('change', newTimer => {
    if (!newTimer) {
      dispatch(clearTimer())
      return
    }

    dispatch(updateTimer(newTimer))
  })
}
