import twitchie from 'nodecg-twitchie'

import { Dispatch } from 'redux'
import { queueNotificationAction } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  twitchie.on('user.subscription', subscriber => {
    dispatch(
      queueNotificationAction({
        topic: 'subscriber',
        user: subscriber.name,
        message: subscriber.message,
        scale: subscriber.months,
      })
    )
  })
}
