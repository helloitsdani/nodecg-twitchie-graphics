import twitchie from 'nodecg-twitchie'
import { Dispatch } from 'redux'

import { queueNotificationAction } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  twitchie.on('user.follower', follower => {
    dispatch(
      queueNotificationAction({
        topic: 'follower',
        user: follower.from_name,
      })
    )
  })
}
