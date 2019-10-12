import twitchie from 'nodecg-twitchie'
import { Dispatch } from 'redux'

import { queueNotification } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  twitchie.on('user.follower', follower => {
    dispatch(
      queueNotification({
        topic: 'follower',
        user: follower.from_name,
      })
    )
  })
}
