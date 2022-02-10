import { type Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { updateStreamInfoAction } from '../actions/stream'

export default (dispatch: Dispatch) => {
  twitchie.stream.info.on('change', (info) => {
    if (!info) {
      return
    }

    dispatch(updateStreamInfoAction(info))
  })
}
