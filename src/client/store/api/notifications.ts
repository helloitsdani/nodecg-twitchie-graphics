import { type Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { NotificationType } from '../../types'
import { queueNotificationAction } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  twitchie.on('user.new', (newChatter) => {
    queueNotificationAction({
      topic: NotificationType.new_chatter,
      ...newChatter,
    })
  })

  twitchie.on('user.follower', (follower) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.follower,
        ...follower,
      }),
    )
  })

  twitchie.on('user.subscription', (subscriber) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.subscriber,
        ...subscriber,
      }),
    )
  })

  twitchie.on('user.subscription.gift', (gift) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.subscriber_gift,
        ...gift,
      }),
    )
  })

  twitchie.on('user.subscription.community', (gifts) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.community_gift,
        ...gifts,
      }),
    )
  })
}
