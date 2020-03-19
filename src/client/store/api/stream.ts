import twitchie from '../../twitchie'

import { Dispatch } from 'redux'
import { updateStreamInfoAction } from '../actions/stream'

export default (dispatch: Dispatch) => {
  twitchie.stream.info.on('change', info => {
    if (!info) {
      return
    }

    dispatch(updateStreamInfoAction(info))
  })
}
