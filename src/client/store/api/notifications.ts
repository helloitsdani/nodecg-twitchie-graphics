import { type Dispatch } from 'redux'

import twitchie from '../../twitchie'
import { NotificationType } from '../../types'
import { queueNotificationAction } from '../actions/notifications'

export default (dispatch: Dispatch) => {
  twitchie.on('user.new', (newChatter) => {
    queueNotificationAction({
      topic: NotificationType.NEW_CHATTER,
      ...newChatter,
    })
  })

  twitchie.on('user.follower', (follower) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.FOLLOWER,
        ...follower,
      }),
    )
  })

  twitchie.on('user.subscription', (subscriber) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.SUBSCRIBER,
        ...subscriber,
      }),
    )
  })

  twitchie.on('user.subscription.gift', (gift) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.SUBSCRIBER_GIFT,
        ...gift,
      }),
    )
  })

  twitchie.on('user.subscription.community', (gifts) => {
    dispatch(
      queueNotificationAction({
        topic: NotificationType.COMMUNITY_GIFT,
        ...gifts,
      }),
    )
  })
}
