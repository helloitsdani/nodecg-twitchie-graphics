import twitchie from '../../twitchie'

import { queueNotification } from '../actions/notifications'

export default (dispatch) => {
  const dispatchSubscriberNotification = ({
    username,
    months,
    message,
  }) => {
    dispatch(queueNotification({
      topic: 'subscriber',
      user: username,
      scale: months,
      message,
    }))
  }

  twitchie.on(
    'channel.subscription',
    dispatchSubscriberNotification,
  )
}
