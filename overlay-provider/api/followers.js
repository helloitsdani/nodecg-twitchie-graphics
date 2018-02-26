import twitchie from '../../twitchie'

import { queueNotification } from '../actions/notifications'

import getUsername from '../utils/getUsername'

export default (dispatch) => {
  const dispatchFollowerNotification = ({ user }) => {
    dispatch(queueNotification({
      topic: 'follower',
      user: getUsername(user),
    }))
  }

  twitchie.on(
    'channel.follower',
    dispatchFollowerNotification,
  )
}
