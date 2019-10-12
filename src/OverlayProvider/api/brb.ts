import twitchie from '../../twitchie'

import { Dispatch } from 'redux'
import { updateBRB } from '../actions/brb'

export default (dispatch: Dispatch) => {
  twitchie.graphics.brb.on('change', status => {
    if (!status) {
      return
    }

    dispatch(updateBRB(status))
  })
}
