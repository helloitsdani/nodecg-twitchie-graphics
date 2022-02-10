import { type Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { updateBRBAction } from '../actions/brb'

export default (dispatch: Dispatch) => {
  twitchie.graphics.brb.on('change', (status) => {
    if (!status) {
      return
    }

    dispatch(updateBRBAction(status))
  })
}
