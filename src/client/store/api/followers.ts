import { type Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { queueNotificationAction } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  twitchie.on('user.follower', (follower) => {
    dispatch(
      queueNotificationAction({
        topic: 'follower',
        user: follower.from_name,
      }),
    )
  })
}
