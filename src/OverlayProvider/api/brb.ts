import { createReplicant } from 'nodecg-twitchie'

import { Dispatch } from 'redux'
import { BRBStatus } from '../../types'
import { updateBRB } from '../actions/brb'

export default (dispatch: Dispatch) => {
  const brb = createReplicant<BRBStatus>(nodecg, 'brb', {
    defaultValue: {
      away: false,
      message: undefined,
    },
    persistent: true,
  })

  brb.on('change', status => {
    if (!status) {
      return
    }

    dispatch(updateBRB(status))
  })
}
